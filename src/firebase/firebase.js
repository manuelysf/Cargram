import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNq4RJ4EG3W6cEb00u8dAIUDVWKj4mL6I",
  authDomain: "cargram-71b79.firebaseapp.com",
  projectId: "cargram-71b79",
  storageBucket: "cargram-71b79.appspot.com",
  messagingSenderId: "89306250796",
  appId: "1:89306250796:web:4eb33796c5dab3d2d39b89",
  measurementId: "G-NVH277QNL6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};
