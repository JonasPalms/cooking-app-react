import firebase from "firebase";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBlILR1_-RNdQS8zCVktRXTY79XZ1g2KC0",
    authDomain: "cooking-ninja-site-8387f.firebaseapp.com",
    projectId: "cooking-ninja-site-8387f",
    storageBucket: "cooking-ninja-site-8387f.appspot.com",
    messagingSenderId: "200094179361",
    appId: "1:200094179361:web:db9dc53894bcb025da8360"
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const projectFirestore = firebase.firestore()

export { projectFirestore };