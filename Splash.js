//import liraries
import React, { Component } from 'react';
import { View, Text,ActivityIndicator,StyleSheet} from 'react-native';
// create a component
class Splash extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.login}>
                    <Text style={{color: '#fff',fontSize: 40}}>kuliah<Text style={{color: '#fff',fontSize: 40,fontWeight: 'bold'}}>K</Text>u</Text>
                </View>
                <ActivityIndicator />
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
        backgroundColor: '#5b8930',
        flexDirection: 'row'
    },
    login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       // backgroundColor: 'red',
    },
    button : {
        width: 250,
        height: 30,
        marginTop: 15,
        backgroundColor: '#7A942E',
        justifyContent: 'center',
        alignItems:'center'
    },
    input: {
        width: 250,
        height: 30,
	padding : 0,
        marginTop: 15,
        borderColor: 'transparent',
        borderBottomColor: '#fff',
        borderWidth: 1
    }
});

//make this component available to the app
export default Splash;
