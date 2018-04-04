import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, AsyncStorage,AppState } from 'react-native';
import { MainStack, isLogin } from './config/Route';
import Header from './home/Header';
import Login from './login/Login';
import PushNotif from './config/PushNotif';
import PushNotification from 'react-native-push-notification';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {jadwalReducer} from './config/reducers/Main';
import {getData,fireNotif,removeToken} from './config/Api';
import Splash from './Splash';
import FCM, {FCMEvent} from 'react-native-fcm';
import codePush from "react-native-code-push";

var store = createStore(jadwalReducer);
var ws;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin : null,
      initial : true,
      notifId : null,
    }
  }

  // componentDidMount(){
  //   AppState.addEventListener('change',this.handleChange);
  // }

  wsInit(nim,token){
    ws = new WebSocket('ws://localhost:4444/jadwal');
     ws.onopen = () => {
       let data = {
         action : 'auth',
         data : {
           id : nim
         }
       };
       ws.send(JSON.stringify(data));
     }
 
     ws.onmessage = (e) => {
       let data = JSON.parse(e.data);
       switch(data.action){
         case 'log':
           console.log(data);
         break;
         case 'update':
           fireNotif(data.msg);
           getData(token,(res) => {
             store.dispatch({type : "FETCH",data : res})
           })
         break;
         default:
           console.log(data);
       }
     }
   }


  updateData(){
    store.dispatch({type : 'LOADING'});
    AsyncStorage.getItem('token').done(token => {
      getData(token,res => {
        store.dispatch({type : 'FETCH',data: res})
      })
    })
  }

  setNotifId(notifId){
    this.setState({
      notifId : notifId,
    })
  }
  
  componentWillMount(){
    try {
      AsyncStorage.multiGet(['nim','token']).done((nim) => {
        this.setState({
          isLogin: nim[0][1],
          initial : false,
        });
        if(nim[1][1] !== null){
          this.wsInit(nim[0][1],nim[1][1]);
          getData(nim[1][1],(res) => {
            console.log('Ambil data',res);
            store.dispatch({type : 'FETCH',data: res})
          })
        }
      });
    } catch (error) {
      
    }
  }
	


  logout(){
    AsyncStorage.getItem('token').done(token => {
      console.log(this.state.notifId);
      removeToken(token,this.state.notifId);
    })
    AsyncStorage.multiRemove(['nim','user','token']).then(() => {
      this.setState({
        isLogin: null
      });
      ws.close();
    })
  }

  login(user,token){
    console.log('inputan user',user)
    AsyncStorage.multiSet([['nim',user.nim],['name',user.nama],['token',token]]).then(() => {
      this.setState({
        isLogin: user.nim
      })
      this.wsInit(user.nim,token);
      getData(token,(res) => {
        store.dispatch({type: 'FETCH',data: res})
      })
    })
  }



  render() {
    return (this.state.initial) ? <Splash /> : (this.state.isLogin !== null) ? (
      <Provider store={store}>
        <View style={styles.container} >
          <Header logout={this.logout.bind(this)} />
          <MainStack />
          <PushNotif notifId={this.setNotifId.bind(this)} doUpdate={this.updateData.bind(this)} />
        </View>
      </Provider>
    ): (
        <View style={styles.container} >
          <Login login={this.login.bind(this)} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#5b8930'
  }
})

export default codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);
