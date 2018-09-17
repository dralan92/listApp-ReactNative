import React from 'react'
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, Text, View ,ListView,TouchableHighlight,Button} from 'react-native';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    }
  render() {
    return (
        <View>
        <Text>Home</Text>
        <Button
          title="Go to List"
          onPress={() => this.props.navigation.navigate('List')}
        />
        <Button
          title="Go to Registration"
          onPress={() => this.props.navigation.navigate('Register')}
        />
    </View>
    )
  }
}
