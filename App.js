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
import {getData} from './config/Api';

var store = createStore(jadwalReducer);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin : null
    }
  }

  // componentDidMount(){
  //   AppState.addEventListener('change',this.handleChange);
  // }
  
  componentWillMount(){
    try {
      AsyncStorage.multiGet(['nim','token']).done((nim) => {
        this.setState({
          isLogin: nim[0][1]
        });
        if(nim[1][1] !== null){
          getData(nim[1][1],(res) => {
            console.log('Ambil data',res);
            store.dispatch({type : 'FETCH',data: res})
          })
        }
      });
    } catch (error) {
      
    }
  }
	

  componentWillUnmount(){
    // AppState.removeEventListener('change',this.handleChange);
    this.logout();
  }

  handleChange(status){
    if(status === 'background') {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + (10 * 1000)) // in 60 secs
      });
    }
  }

  logout(){
    AsyncStorage.multiRemove(['nim','user','token']).then(() => {
      this.setState({
        isLogin: null
      })
    })
  }

  login(user,token){
    console.log('inputan user',user)
    AsyncStorage.multiSet([['nim',user.nim],['name',user.nama],['token',token]]).then(() => {
      this.setState({
        isLogin: user.nim
      })
      getData(token,(res) => {
        store.dispatch({type: 'FETCH',data: res})
      })
    })
  }



  render() {
    return (this.state.isLogin !== null) ? (
      <Provider store={store}>
        <View style={styles.container} >
          <Header logout={this.logout.bind(this)} />
          <MainStack />
          <PushNotif />
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
