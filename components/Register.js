import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableHighlight,Button} from 'react-native';
import { TextInput } from '../node_modules/react-native-gesture-handler';

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register',
    }

    state = {
        username : '',
        password : '',
        gender : '',
        email : '',
        phone : '',
        age : '',

    }
  render() {
    return (
        <View>
        <Text>Enter Your Details to Register</Text>
        <TextInput placeholder='username' value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}/>
        <TextInput placeholder='password' value={this.state.password} 
                    onChangeText={(text) => this.setState({password: text})}/>
        <TextInput placeholder='gender' value={this.state.gender}
                    onChangeText={(text) => this.setState({gender: text})}/>
        <TextInput placeholder='email' value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
        <TextInput placeholder='phone' value={this.state.phone}
                    onChangeText={(text) => this.setState({phone: text})}/>
        <TextInput placeholder='age' value={this.state.age}
                    onChangeText={(text) => this.setState({age: text})}/>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('List')}
        />
        <Text>{this.state.username}</Text>
        </View>
    )
  }
}
