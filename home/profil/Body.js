//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Info from './Info';
import Tugas from './Tugas';
// create a component
class Profil extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{flex:1,marginTop:20}}>
                <Info data={this.props.navigation.state.params.data} />
                <Tugas data={this.props.navigation.state.params.data.tugas} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        flexDirection: 'column',
    },
});

//make this component available to the app
export default Profil;
