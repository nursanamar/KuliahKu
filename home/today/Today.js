//import liraries
import React, { Component } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, ScrollView, Button,AsyncStorage } from 'react-native';
import List from './List';
import Profil from '../profil/Body';
import {getData} from '../../config/Api';
// create a component
export default class Tbody extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            status : '',
        }
    }

    componentDidMount(){
        let status = <Text>Loading</Text>;
        this.setState({
            status : status
        });

        AsyncStorage.getItem('token').done((token) => {
            getData(token,function(res) {
                var data = res;
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
                this.setState({
                    data : lists,
                    status : ''
                })
            }.bind(this))
        })
    }

    render() {
        
        return (
            <View style={styles.container}>
                {/* {this.state.status} */}
                <ScrollView>
                   {this.state.data}
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


