import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBROGD34O6x_m5__U820Wl-VLS4OlhdOJk",
    authDomain: "barter-system-app-bb4ac.firebaseapp.com",
    projectId: "barter-system-app-bb4ac",
    storageBucket: "barter-system-app-bb4ac.appspot.com",
    messagingSenderId: "508612370183",
    appId: "1:508612370183:web:f4ebdbd3c74f78f7f46fa2",
    measurementId: "G-E01YTJVX06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();