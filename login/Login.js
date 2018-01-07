//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, AsyncStorage } from 'react-native';
import setSession from './Logic';
import {authUser} from '../config/Api';
// create a component
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            pass: '',
            error: null,
        }
    }

    login(){
        if((this.state.user === '') && (this.state.pass === '')){
            return
        }else{
	    this.setState({
	    	error : 'loading.....'
	    });	
            authUser(this.state.user,this.state.pass,function(data) {
                console.log(data);
                if(data.status === 'failed'){
                    this.setState({
                        error: data.desc
                    });
                }else{
                    this.props.login(data.data.user,data.data.token);
                }
            }.bind(this),function(err){
	    	this.setState({
			error : JSON.stringify(err)
		});
		console.log(err);
	    }.bind(this));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.login}>
                    <Text style={{color: '#fff',fontSize: 40}}>kuliah<Text style={{color: '#fff',fontSize: 40,fontWeight: 'bold'}}>K</Text>u</Text>
                    <Text style={{color: 'white'}}>Login</Text>
                    <TextInput value={this.state.user} onChangeText={(text) => { this.setState({user: text}) }} placeholder="NIM" style={styles.input} underlineColorAndroid='transparent' />
                    <TextInput secureTextEntry={true} placeholder="Password" style={styles.input} underlineColorAndroid='transparent' onChangeText={(pass) => { this.setState({pass: pass}) }} />
                    <TouchableOpacity onPress={() => {
                        this.login();
                        }} >
                        <View style={styles.button} >
                            <Text style={{color: '#fff'}} >Login</Text>
                        </View>
                    </TouchableOpacity>
                    <Text>{this.state.error}</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5b8930',
        flexDirection: 'row'
    },
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: 'red',
    },
    button : {
        width: 250,
        height: 30,
        marginTop: 15,
        backgroundColor: '#7A942E',
        justifyContent: 'center',
        alignItems:'center'
    },
    input: {
        width: 250,
        height: 30,
	padding : 0,
        marginTop: 15,
        borderColor: 'transparent',
        borderBottomColor: '#fff',
        borderWidth: 1
    }
});

//make this component available to the app
export default Login;
