// VERSION 9
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDhPKWqnzE6p7jdj38Ss2divhqsNgDimw",
    authDomain: "invoiceapplication-b48bd.firebaseapp.com",
    projectId: "invoiceapplication-b48bd",
    storageBucket: "invoiceapplication-b48bd.appspot.com",
    messagingSenderId: "489930430008",
    appId: "1:489930430008:web:843cb1bae9dab136bf38cd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();