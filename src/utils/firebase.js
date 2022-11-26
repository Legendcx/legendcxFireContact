

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHPbbSt_OVhxrko_cpMpBCPOandKzUPwI",
  authDomain: "tekrarfire-contact.firebaseapp.com",
  databaseURL: "https://tekrarfire-contact-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tekrarfire-contact",
  storageBucket: "tekrarfire-contact.appspot.com",
  messagingSenderId: "508480426616",
  appId: "1:508480426616:web:d7240f29552ef44948138d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;