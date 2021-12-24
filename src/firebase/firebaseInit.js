// VERSION 9
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    //LJDB
    apiKey: "AIzaSyCTioxH6vwzcFZEV0nsmOlRQpvl2IT2FBE",
    authDomain: "invoice-40706.firebaseapp.com",
    projectId: "invoice-40706",
    storageBucket: "invoice-40706.appspot.com",
    messagingSenderId: "122984197750",
    appId: "1:122984197750:web:ec224a7c5df23933327957"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();