// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, /* connectAuthEmulator */ } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASEURL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

let app: FirebaseApp;
// const useEmulator = () => import.meta.env.VITE_USE_FIREBASE_EMULATOR;

export const setUpFirebase = () => {
  try {
    app = initializeApp(firebaseConfig);
  } catch (error) {
    console.error(error);
  }
};

export const useAuth = () => {
  const auth = getAuth(app);
  // if (useEmulator()) connectAuthEmulator(auth, "http://localhost:9099");
  return auth;
};
