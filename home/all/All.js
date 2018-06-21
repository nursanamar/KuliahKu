import React,{Component} from 'react';
import { AsyncStorage,ActivityIndicator ,TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native';
import List from '../today/List';
import {connect} from 'react-redux';
import {getAll,getData} from '../../config/Api';

class All extends Component {
    constructor(props){
        super(props);
    }

    doUpdate(){
        this.props.dispatch({type:'LOADING'});
        AsyncStorage.getItem('token').then(token => {
            getData(token,function(data){
                this.props.dispatch({type : "FETCH",data:data});
            }.bind(this))
        })
    }

    

    render(){
        let lists = [];
        let daftar = [];
        let hari =['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
        let data = (this.props.data == undefined) ? [] : this.props.data;
        console.log(data);
        data.forEach((dat,key) => {
            let tempList = [];
            dat.forEach((da,skey) => {
                tempList.push(
                    <TouchableOpacity key={skey} onPress={() => {
                        this.props.navigation.navigate('profil', { data: da, doUpdate: this.doUpdate.bind(this) })
                    }} >
                        <List
                            matkul={da.matkul}
                            dosen={da.dosen}
                            time={da.time}
                            room={da.room}
                            status={da.status}
                            id={da.idKuliah}
                        />
                    </TouchableOpacity>
                );
            })
            if(!(tempList == 0)){
                daftar.push(
                    <View key={key} >
                        <Text style={{fontWeight:'bold',paddingLeft:10}} >{hari[key]}</Text>
                        {tempList}
                    </View>
                )
            }
        })
        return (
            <View style={styles.container} >
            {
                this.props.status ? 
                <ActivityIndicator animating={true} />
                :
                <ScrollView>
                    {daftar}
                </ScrollView>
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'column'
    },
    
});

const mapStateToProps = (state) => {
    return {
        data : state.data.all,
        status : state.isLoading,
    }
}

export default connect(mapStateToProps)(All);