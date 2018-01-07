//import liraries
import React, { Component } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, ScrollView, Button,AsyncStorage } from 'react-native';
import List from './List';
import Profil from '../profil/Body';
import {getData} from '../../config/Api';
// create a component
export default class Tbody extends Component {
    render() {
        var data = getData('today');
        var lists = [];
        data.forEach((data,key) => {
            lists.push(<TouchableOpacity key={key} onPress={() => {
                        this.props.navigation.navigate('profil',{data:data})
                    }} >
                    <List
                        matkul={data.matkul}
                        dosen={data.dosen}
                        time={data.time}
                        room={data.room}
                        status={data.status}
                    />
                </TouchableOpacity>)
        })
        return (
            <View style={styles.container}>
                <ScrollView>
                   {lists}
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'column'
    },
    
});


