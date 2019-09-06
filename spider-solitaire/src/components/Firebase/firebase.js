import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDAfCXPuQMB5g5qIjrv_CitdOtxmqJr3uA",
    authDomain: "spider-solitaire-backend.firebaseapp.com",
    databaseURL: "https://spider-solitaire-backend.firebaseio.com",
    projectId: "spider-solitaire-backend",
    storageBucket: "",
    messagingSenderId: "848803607744",
    appId: "1:848803607744:web:2f9ee39cc4653610c32925"
};
// Initialize Firebase
class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
    }

    // Registration
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);
    
    // Login
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // Logout
    doSignOut = () => this.auth.signOut();

    // Password edit
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;