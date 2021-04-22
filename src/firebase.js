// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyCzCye5OO2pZq_llwvjN3m_nUtAbou_2Tw',
    authDomain: 'clone-8de22.firebaseapp.com',
    projectId: 'clone-8de22',
    storageBucket: 'clone-8de22.appspot.com',
    messagingSenderId: '417067817854',
    appId: '1:417067817854:web:404580da792d6ac6f0b12f',
    measurementId: 'G-8CDLM9M8GM'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
