import firebase from 'firebase'
import firestore from 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDxJJw0p305zZxXTI1hzNBTftJrdU2l4uE",
    authDomain: "drinks-interface.firebaseapp.com",
    databaseURL: "https://drinks-interface.firebaseio.com",
    projectId: "drinks-interface",
    storageBucket: "drinks-interface.appspot.com",
    messagingSenderId: "994063115446"
    // appId: "1:994063115446:web:01cfd70b9983d9f1"
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true})
// expore firestore data
export default firebaseApp.firestore()