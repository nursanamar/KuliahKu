//import liraries
import React, { Component } from 'react';
import {ActivityIndicator ,TouchableOpacity, View, Text, StyleSheet, ScrollView, Button,AsyncStorage } from 'react-native';
import List from './List';
import Profil from '../profil/Body';
import {connect} from 'react-redux';
import {getData} from '../../config/Api';
// create a component
class Tbody extends Component {
    constructor(props){
        super(props);
    }


    render() {
        var data = this.props.data;
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
                {
                    (this.props.status) ?    
                        <ActivityIndicator animating={true} />
                    :
                        <ScrollView>
                            {lists}
                        </ScrollView>
                }
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

const mapStateToProps = (state) => {
    return {
        data : state.data.today,
        status : state.status
    }
}

export default connect(mapStateToProps)(Tbody);