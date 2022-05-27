import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyA3FhLTNcpP41ZVSl6JumnpFaRP1y7rGAw',
  authDomain: 'fireblog-a673b.firebaseapp.com',
  projectId: 'fireblog-a673b',
  storageBucket: 'fireblog-a673b.appspot.com',
  messagingSenderId: '470489251522',
  appId: '1:470489251522:web:6d0643df4279aae59a855b',
  measurementId: 'G-0HL3VGHKPV',
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
