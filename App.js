import React from 'react';
import { StyleSheet, Text, View ,ListView,TouchableHighlight} from 'react-native';


export default class App extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
    this.state = {
      itemDataSource : ds
    }
  }

  componentWillMount(){
    this.getItems();
  }
  componentDidMount(){
    this.getItems();
  }
  getItems(){
    let items = [{title:'One'}, {title:'Two'}];
    this.setState({
      itemDataSource : this.state.itemDataSource.cloneWithRows(items)
    });
  }
  renderRow(item){
    return(
      <TouchableHighlight

      >
        <View>
            <Text>{item.title}</Text>
        </View>

      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView 
          dataSource = {this.state.itemDataSource}
          renderRow = {this.renderRow}
        />
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
