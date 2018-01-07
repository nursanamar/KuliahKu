import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Info extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={{ flex: 1,padding: 10, backgroundColor:"#fff" }} >
                <View style={{flex:1,alignItems:'center',maxHeight:25,marginBottom:30}}>
                    <Text style={{fontSize:25,fontWeight:'bold'}} >{this.props.data.matkul}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', maxHeight: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>Dosen </Text>
                        <Text style={{ flex: 1,}} >{this.props.data.dosen}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', maxHeight: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>Jam </Text>
                    <Text style={{ flex: 1,}} >{this.props.data.time}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', maxHeight: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ flex: 1,fontSize:15,fontWeight:'bold' }}>Ruangan </Text>
                    <Text style={{ flex: 1,}} >{this.props.data.room}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Info;