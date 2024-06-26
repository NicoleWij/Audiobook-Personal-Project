import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBAPyni-AyX5vyb_V65Tt0RdQAJfDEa7Po",
  authDomain: "audiobook-percentage.firebaseapp.com",
  projectId: "audiobook-percentage",
  storageBucket: "audiobook-percentage.appspot.com",
  messagingSenderId: "312719723365",
  appId: "1:312719723365:web:f95a130c071a1b486a2f8c",
  measurementId: "G-CCVH93J6P5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };