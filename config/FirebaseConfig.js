// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs78CslWLILGrm-kCDKTOyvyAMcuIWtHg",
  authDomain: "firstreactnativeappbusinees.firebaseapp.com",
  projectId: "firstreactnativeappbusinees",
  storageBucket: "firstreactnativeappbusinees.firebasestorage.app",
  messagingSenderId: "50649825092",
  appId: "1:50649825092:web:328ce9bae8a1aa3225a111",
  measurementId: "G-ZLHE881YM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
// const analytics = getAnalytics(app);
export { db };