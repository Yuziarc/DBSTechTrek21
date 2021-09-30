// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNq5QfJjBjFLhxycPkud5WjUdUetgl4bE",
  authDomain: "test-d0561.firebaseapp.com",
  databaseURL: "https://test-d0561-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-d0561",
  storageBucket: "test-d0561.appspot.com",
  messagingSenderId: "315700338776",
  appId: "1:315700338776:web:1358d872e4fb891f306a2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)