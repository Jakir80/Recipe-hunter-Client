// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3IfLpT6o4d4LSTuc_OznnvCgTktWl8o0",
  authDomain: "chef-time-assignment.firebaseapp.com",
  projectId: "chef-time-assignment",
  storageBucket: "chef-time-assignment.appspot.com",
  messagingSenderId: "577776980680",
  appId: "1:577776980680:web:5ec4c5512d77984af0cbfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;