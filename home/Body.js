import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import TodayStack from './today/Today';
import TomorowStack from './tomorow/Tmbody';

export class Today extends React.Component {
    render(){
        return (
            <TodayStack navigation={this.props.navigation}/>
        )
    }
}

 export class Tomorrow extends React.Component {
    render(){
        return (
            <TomorowStack navigation={this.props.navigation}/>
        )
    }
}



