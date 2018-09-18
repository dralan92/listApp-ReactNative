import React from 'react'
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View ,ListView,TouchableOpacity,Button} from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }
    state = {
      username : '',
    }
    onPress = () => {
      this.setState({
        username: 'fuck'
      })
    }
  render() {
    return (
        <View>
        
        
         <TouchableOpacity
            style={styles.listButton}
            onPress={() => this.props.navigation.navigate('List')}
          >
            <Text> REGESTERED USERS' LIST </Text>
        </TouchableOpacity>



       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.username}
          </Text>
        </View>
       

        <TouchableOpacity
            style={styles.listButton}
            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Text> REGISTER YOURSELF </Text>
        </TouchableOpacity>
        <Text>

          <Text>INSTRUCTIONS : This is how it works---></Text>
          GIVE IT TIME!!!!!

          So please "REGISTER YOURSELF" and open this app after 1 week, 
          and go to "REGISTERED USER'S LIST".

          This is not like other fake apps.This app gives you the PHONE NUMBER!!!!

          Anyone can break this small app, but if you want it to serve the purpose use it well.
          
          
        </Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  listButton : {
    
    backgroundColor : '#42c8f4',
    height: 60,
    width: '100%',
   color:'yellow',
    padding : 10 ,
    margin:10,
    textAlign: 'right', 
    alignSelf: 'stretch'
   
  },
  headerStyle:{
    fontWeight:'bold'
  }
});