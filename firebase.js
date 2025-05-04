// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE8Em_AmKMn4xeg7TrvUVXsWBlaLVNWME",
  authDomain: "blog-web-128a5.firebaseapp.com",
  projectId: "blog-web-128a5",
  storageBucket: "blog-web-128a5.firebasestorage.app",
  messagingSenderId: "341225800245",
  appId: "1:341225800245:web:f1e1b6b98493e73f79a77c",
  measurementId: "G-M88JMW8E42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);