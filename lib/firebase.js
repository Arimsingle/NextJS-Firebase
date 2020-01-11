import * as firebase from 'firebase';
import 'firebase/firestore';
const config_firebase  = { // เปลียนตามของตัวเอง
    apiKey: "AIzaSyCwvt5zNvQNXNwItQMnONvY9VmzbpqQcys",
    authDomain: "like-firebase.firebaseapp.com",
    databaseURL: "https://like-firebase.firebaseio.com",
    projectId: "like-firebase",
    storageBucket: "like-firebase.appspot.com",
    messagingSenderId: "67625472141",
    appId: "1:67625472141:web:29abc543b51be8a03f52c4",
    measurementId: "G-MVTQ8BKVH2"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config_firebase);
}

export default firebase;