import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tugas extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 20, padding: 15 }} >
                <Text style={{ fontWeight: 'bold' }} >Tugas</Text>
                <View style={{ flex: 1 }} >
                    <Text>{this.props.data}</Text>
                </View>
            </View>
        );
    }
}

export default Tugas;