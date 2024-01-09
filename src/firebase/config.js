import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'




// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJeDbDe_7bPxdwjdAfgW7Usf08UGyZFo",
  authDomain: "olxclone-8ae0f.firebaseapp.com",
  projectId: "olxclone-8ae0f",
  storageBucket: "olxclone-8ae0f.appspot.com",
  messagingSenderId: "404280849338",
  appId: "1:404280849338:web:bca55a807f323e19ab2383",
  measurementId: "G-JGV0SSRTXF"
};

  export default  firebase.initializeApp(firebaseConfig)
