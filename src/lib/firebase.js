// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNnt0M1e4Dgnvx5U9DQ6Cdh3eWoCw2i7Y",
  authDomain: "daryl-findlay.firebaseapp.com",
  projectId: "daryl-findlay",
  storageBucket: "daryl-findlay.appspot.com",
  messagingSenderId: "386565085207",
  appId: "1:386565085207:web:4be09371e3f5efaca1e452",
  measurementId: "G-01MBXQNJXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
