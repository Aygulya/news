// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcc7gqTaG2j4meotIIxPEct-oK_Qy84Qk",
  authDomain: "news-for-am.firebaseapp.com",
  projectId: "news-for-am",
  storageBucket: "news-for-am.firebasestorage.app",
  messagingSenderId: "73687022830",
  appId: "1:73687022830:web:b95b623835d2f4cfd087ff",
  measurementId: "G-W5RJ51010X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);