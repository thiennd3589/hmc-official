import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAJAfYXC0Biu_dfN1hrzRDLO0v_CilVSKo",
    authDomain: "hmc-origin.firebaseapp.com",
    databaseURL: "https://hmc-origin.firebaseio.com",
    projectId: "hmc-origin",
    storageBucket: "hmc-origin.appspot.com",
    messagingSenderId: "344366899030",
    appId: "1:344366899030:web:c129444a355b4fbd2300f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firestore();




