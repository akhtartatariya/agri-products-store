// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { conf } from "../conf/conf";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(conf);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { app, fireDB, auth ,storage};
