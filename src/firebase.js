import { initializeApp } from "firebase/app";
import {getMessaging} from "firebase/getMessaging";

const firebaseConfig = {
    apiKey: "AIzaSyB2OMAKvuQiCt54K1Z6NmMZLu1hlqjurCk",
    authDomain: "my-app-af8fd.firebaseapp.com",
    projectId: "my-app-af8fd",
    storageBucket: "my-app-af8fd.appspot.com",
    messagingSenderId: "374443149540",
    appId: "1:374443149540:web:eb363e4e6c2fd162c004f1",
    measurementId: "G-168LELSSGF"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);