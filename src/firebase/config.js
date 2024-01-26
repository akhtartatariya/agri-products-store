// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { conf } from "../conf/conf";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
export const app = initializeApp(conf);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
