import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAbEs8DGvm-1tHXbrJ4LBVoaAo65LeJ19E",
  authDomain: "nates-project-bb905.firebaseapp.com",
  databaseURL: "https://nates-project-bb905.firebaseio.com",
  projectId: "nates-project-bb905",
  storageBucket: "nates-project-bb905.appspot.com",
  messagingSenderId: "612793706733",
  appId: "1:612793706733:web:18f9610588335f15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
