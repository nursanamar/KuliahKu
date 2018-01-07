//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class List extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.list}>
                <View style={styles.desc}>
                    <Text style={styles.matkul}>{this.props.matkul}</Text>
                    <Text style={styles.dosen}>{this.props.dosen}</Text>
                    <Text style={styles.tw}>{this.props.time+" "+this.props.room}</Text>
                </View>
                <View style={styles.status}>
                    <Text style={styles.statusText}>{this.props.status}</Text>
                </View>   
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    list : {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // maxHeight: 80,
        padding: 10,
        marginBottom:10
    },
    desc : {
        flex: 1,
        maxWidth: 300,
       
    },
    matkul : {
        fontWeight: 'bold',
        fontSize: 15,
    },
    dosen : {
        
    },
    tw : {

    },
    status: {
        flex:1,
        alignItems:'flex-end',
        maxWidth: 90
    },
    statusText: {
        color: '#fff',
        backgroundColor: '#308954',
        marginRight: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    }
});    

//make this component available to the app
export default List;
