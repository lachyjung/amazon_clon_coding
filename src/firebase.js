import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBPTR4cJDdb6NFVmEUXQ8Gspvz5SkKe_1U",
  authDomain: "clone-74d33.firebaseapp.com",
  databaseURL: "https://clone-74d33.firebaseio.com",
  projectId: "clone-74d33",
  storageBucket: "clone-74d33.appspot.com",
  messagingSenderId: "973012873535",
  appId: "1:973012873535:web:cacecabf7ceb80f5bea38a",
  measurementId: "G-PTPHZYFQFH",
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
