import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwfzIs_rAKvi-WdD5JdvVpZ0TrWUsKbUU",
  authDomain: "mock-interview-350cf.firebaseapp.com",
  projectId: "mock-interview-350cf",
  storageBucket: "mock-interview-350cf.firebasestorage.app",
  messagingSenderId: "494767215816",
  appId: "1:494767215816:web:bdfb0c127414d4fb0581fd",
  measurementId: "G-EMTNYD4WFE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);