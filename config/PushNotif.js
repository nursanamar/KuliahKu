//import liraries
import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

// create a component
class PushNotif extends Component {
    componentDidMount(){
        PushNotification.configure({
            onRegister: function(token) {
                console.log(token);
              },
            onNotification: (notification) => {
                console.log('Notification',notification);
            },
            senderID : "1053670299115"
        })
    }
    render() {
        return null;
    }
}


//make this component available to the app
export default PushNotif;
