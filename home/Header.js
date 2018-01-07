import React from 'react';
import { StyleSheet, Text, View,Button,ToolbarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends React.Component  {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <View style={header.header}>
        <View style={{ flex: 1 }}>
          <Text style={header.headerText}>kuliahKu</Text>
        </View>
        <View>
          {/* <ToolbarAndroid
            title="Home"
            titleColor="white"
            navIconName="md-arrow-back"
            
            actions={[
              { title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always' },
              { title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: "#4099FF", show: 'ifRoom' },
            ]}
            overflowIconName="md-more"
          /> */}
          <Button title="logout" onPress={() => { this.props.logout() }} />
          {/* <Icon
            name='log-out' type="entypo" color='#fff' /> */}
        </View>
      </View>
    );
  }
}
const header = StyleSheet.create({
  header : {
    flex : 1,
    backgroundColor: '#5b8930',
    padding: 10,
    maxHeight: 50,
    flexDirection:'row',
  },
  headerText : {
    flex:1,
    color:'#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  // keluar : {
  //   color: '#fff',
  //   fontSize: 40',
  // }
})
