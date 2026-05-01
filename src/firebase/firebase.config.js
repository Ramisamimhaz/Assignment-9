// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx5onsO1uJLNL6wWZDgX7HhMvspDfrEOA",
  authDomain: "toy-topia-web-project.firebaseapp.com",
  projectId: "toy-topia-web-project",
  storageBucket: "toy-topia-web-project.firebasestorage.app",
  messagingSenderId: "652141688125",
  appId: "1:652141688125:web:02a5bef1cb77b96cba8154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);