//import liraries
import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {fireNotif,storeToken} from './Api'
// import PushNotification from 'react-native-push-notification';
import FCM, {FCMEvent} from 'react-native-fcm';
// create a component
class PushNotif extends Component {
    componentDidMount(){
        FCM.getFCMToken().then(id => {
            console.log("token dari get ",id);
            AsyncStorage.getItem('token').done(token => {
                storeToken(token,id);
                this.props.notifId(id);
            })
        });

        this.notificationListener = FCM.on(FCMEvent.Notification, async function(notif) {
            console.log("PushNotif",notif.fcm.body);
            fireNotif({
                body : notif.fcm.body,
                // show_in_foreground
            });
            this.props.doUpdate();
        }.bind(this));

        FCM.on(FCMEvent.RefreshToken, (id) => {
            console.log("token dari listen ",id);            
            AsyncStorage.getItem('token').done(token => {
                storeToken(token,id);
                this.props.notifId(id);                
            })
            // fcm token may not be available on first load, catch it here
          });
        
        // initial notification contains the notification that launchs the app. If user launchs app by clicking banner, the banner notification info will be here rather than through FCM.on event
        // sometimes Android kills activity when app goes to background, and when resume it broadcasts notification before JS is run. You can use FCM.getInitialNotification() to capture those missed events.
        // initial notification will be triggered all the time even when open app by icon so send some action identifier when you send notification
        FCM.getInitialNotification().then(notif => {
           console.log("initial notif",notif)
        });
       
    }

    componentWillUnmount() {
        // stop listening for events
        this.notificationListener.remove();
    }

    render() {
        return null;
    }
}


//make this component available to the app
export default PushNotif;
