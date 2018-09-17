import React from 'react'
import { StyleSheet, Text, View ,ListView,TouchableHighlight} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDx-lF0HK0wkFuIc4Pg5iQd7XkRLFX8HIk",
  authDomain: "itemlister-dc6cb.firebaseapp.com",
  databaseURL: "https://itemlister-dc6cb.firebaseio.com",
  projectId: "itemlister-dc6cb",
  storageBucket: "itemlister-dc6cb.appspot.com"
           }

  const firebaseApp = firebase.initializeApp(firebaseConfig,"firebaseList"); 

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
                <Text>{firebaseApp.name}</Text>
                
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