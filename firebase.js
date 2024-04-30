import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbtr_GkYA7-prLSoYcCbAsJcrs8gwYYFo",
  authDomain: "react-notes-app-bcf0a.firebaseapp.com",
  projectId: "react-notes-app-bcf0a",
  storageBucket: "react-notes-app-bcf0a.appspot.com",
  messagingSenderId: "510876513657",
  appId: "1:510876513657:web:225ff742e1b67f124f2ba8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")