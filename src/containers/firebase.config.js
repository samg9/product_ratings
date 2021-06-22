import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyCu6zrEWWEF0ueEyGMUhvaVEug5_2Gvtkc",
  authDomain: "ratings101-4b196.firebaseapp.com",
  projectId: "ratings101-4b196",
  storageBucket: "ratings101-4b196.appspot.com",
  messagingSenderId: "447285072416",
  appId: "1:447285072416:web:011cd960553c17efb1a245"
};
  
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;