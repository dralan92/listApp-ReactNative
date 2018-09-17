import * as firebase from 'firebase';




const firebaseConfig = {
  apiKey: "AIzaSyDx-lF0HK0wkFuIc4Pg5iQd7XkRLFX8HIk",
  authDomain: "itemlister-dc6cb.firebaseapp.com",
  databaseURL: "https://itemlister-dc6cb.firebaseio.com",
  projectId: "itemlister-dc6cb",
  storageBucket: "itemlister-dc6cb.appspot.com"
           }

  const firebaseApp = firebase.initializeApp(firebaseConfig,"firebaseList"); 
export default firebaseApp;