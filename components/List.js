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

        this.itemRef = this.getRef().child('users');
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
          let users = [];
          snap.forEach((child)=>{
            users.push({
              username: child.val().username,
              gender: child.val().gender,
              email: child.val().email,
              phone: child.val().phone,
              age: child.val().age,
              _key: child.key
            });
            this.setState({
              itemDataSource : this.state.itemDataSource.cloneWithRows(users)
            });
          });
        });
        
        
      }

    renderRow(users){
        return(
          <TouchableHighlight
          style={styles.touchableHighlightStyle}
          >
            <View>
                
                
                <Text>Username : {users.username}</Text>
                <Text>Gender : {users.gender}</Text>
                <Text>Age : {users.age}</Text>
                <Text>Email : {users.email}</Text>
                <Text>Phone : {users.phone}</Text>
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


  
const styles = StyleSheet.create(
  {
    touchableHighlightStyle: {
      color: '#42c8f4',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 5, 
      marginBottom: 5,
      width: '100%',
      backgroundColor: 'yellow',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
);
  export default List;