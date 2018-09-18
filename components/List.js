import React from 'react'
import { StyleSheet, Text, View ,ListView,TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import  firebaseApp from "../Firebase";
import Home from './Home';

class List extends React.Component {
    static navigationOptions = {
        title: 'List',
    }
    constructor(){
        super();
        let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
        this.state = {
          itemDataSource : ds
        }

        this.itemRef = this.getRef().child('shit');
      }
    
      getRef(){
        return firebaseApp.database().ref();
      }

      componentWillMount(){
        this.getItems();
      }
      componentDidMount(){
        this.getItems();
      }
      getItems(){
        //let items = [{title:'One'}, {title:'Two'}];
        this.itemRef.on('value', (snap)=>{
          let items = [];
          snap.forEach((child)=>{
            items.push({
              title: child.val().title,
              _key: child.key
            });
            this.setState({
              itemDataSource : this.state.itemDataSource.cloneWithRows(items)
            });
          });
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
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'unknown');
    return (
        <View style={styles.container}>
        <ListView 
          dataSource = {this.state.itemDataSource}
          renderRow = {this.renderRow}
        />
        <Text>{username}</Text>
      </View>
    )
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
  

  export default List;