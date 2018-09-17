import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableHighlight,Button} from 'react-native';
import { TextInput } from '../node_modules/react-native-gesture-handler';

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register',
    }
  render() {
    return (
        <View>
        <Text>Enter Your Details to Register</Text>
        <TextInput placeholder='username'/>
        <TextInput placeholder='password'/>
        <TextInput placeholder='email'/>
        <TextInput placeholder='gender'/>
        <TextInput placeholder='age'/>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('List')}
        />
        </View>
    )
  }
}
