// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCnDyL2ocP-X_GX_wADPjd-tMLbAjDxOT8",
  authDomain: "coder-rjx.firebaseapp.com",
  projectId: "coder-rjx",
  storageBucket: "coder-rjx.appspot.com",
  messagingSenderId: "12023449517",
  appId: "1:12023449517:web:f41bcf883a4b4376b5c324",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
