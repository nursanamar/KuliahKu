//import liraries
import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

// create a component
class PushNotif extends Component {
    componentDidMount(){
        PushNotification.configure({
            onNotification: (notification) => {
                console.log('Notification',notification);
            }
        })
    }
    render() {
        return null;
    }
}


//make this component available to the app
export default PushNotif;
