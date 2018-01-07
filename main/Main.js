//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import isLogin from './Logic'
// create a component
class Main extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        var login = isLogin;
        if (login) {
            this.props.navigation.navigate('home')
        } else {
            this.props.navigation.navigate('login')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>MyClass</Text>
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Main;
