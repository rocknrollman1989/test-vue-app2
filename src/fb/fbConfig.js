import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7D6x_Xe7WgsxciyagWIUxw35MDDlp9cw",
  authDomain: "task-manager-vue.firebaseapp.com",
  databaseURL: "https://task-manager-vue.firebaseio.com",
  projectId: "task-manager-vue",
  storageBucket: "task-manager-vue.appspot.com",
  messagingSenderId: "368674568352"
};

const taskManagerApp = firebase.initializeApp(config);


export default taskManagerApp.firestore();
