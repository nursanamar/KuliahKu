//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body'
import { HomeStack } from '../config/Route' 
// create a component
export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <HomeStack/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor: '#d2d7d3'
    }
})

