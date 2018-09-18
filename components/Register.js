import React, { Component } from 'react'
import { StyleSheet, Text, View ,ListView,TouchableHighlight,Button,Picker} from 'react-native';
import { TextInput } from '../node_modules/react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation';
import  firebaseApp from "../Firebase";

export default class Register extends Component {

  constructor(){
    super();
    this.usersRef = this.getRef().child('users');
  }
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
    getRef(){
      return firebaseApp.database().ref();
    }
  render() {
    const { navigation } = this.props;
    return (
        <View  style={styles.container}>
        <Text style={styles.activeTitle} >Enter Your Details</Text>
        <TextInput underlineColorAndroid='transparent' style={styles.textInputStyle} placeholder='username' value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}/>
        <TextInput underlineColorAndroid='transparent' style={styles.textInputStyle} placeholder='password' value={this.state.password} 
                    onChangeText={(text) => this.setState({password: text})}/>
        <TextInput underlineColorAndroid='transparent' style={styles.textInputStyle} placeholder='gender' value={this.state.gender}
                    onChangeText={(text) => this.setState({gender: text})}/>
        <Picker
        style={styles.textInputStyle}
        selectedValue={this.state.gender}
       
        onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
        <Picker.Item label="Male" value='male'/>
        <Picker.Item label="Female" value='female'/>
        </Picker>
        <TextInput underlineColorAndroid='transparent' style={styles.textInputStyle} placeholder='email' value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})}/>
        <TextInput underlineColorAndroid='transparent' style={styles.textInputStyle} placeholder='phone' value={this.state.phone}
                    onChangeText={(text) => this.setState({phone: text})}/>
        <TextInput underlineColorAndroid='transparent' style={styles.textInputStyle} placeholder='age' value={this.state.age}
                    onChangeText={(text) => this.setState({age: text})}/>
        <Button style={styles.regButtonStyle}
          title="Register"
          onPress={() => this.usersRef.push(this.state)}
        />
        <Text>{this.state.username}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    activeTitle: {
      color: '#42c8f4',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10, 
      marginBottom: 50,
      width: '100%',
      backgroundColor: 'yellow',
    },
    textInputStyle: {
        color: '#42c8f4',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', 
        marginTop: 20,
        width: '100%',
        backgroundColor: 'yellow',
      },

      regButtonStyle: {
      
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', 
        marginTop: 20,
        width: '100%',
        backgroundColor: '#f4414a',
      },
  });