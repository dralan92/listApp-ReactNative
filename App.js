import React from 'react';
import { StyleSheet, Text, View ,ListView,TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import List from './components/List';
import Home from './components/Home';
import Register from './components/Register';
          

class App extends React.Component {
  
  
  render() {
    return (
      <RootStack/>
    );
  }

  
}

const RootStack = createStackNavigator({
  Home: {
    screen : Home
  },
  List : {
    screen : List
  },
  Register : {
    screen : Register
  }
    
},
);

export default App;