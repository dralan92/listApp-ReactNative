import React from 'react';
import { StyleSheet, Text, View ,ListView} from 'react-native';


export default class App extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
    this.state = {
      itemDataSource : ds
    }
  }
  getItems(){
    let items = [{title:'One'}, {title:'Two'}];
    this.setState({
      itemDataSource : this.state.itemDataSource.cloneWithRows(items)
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
