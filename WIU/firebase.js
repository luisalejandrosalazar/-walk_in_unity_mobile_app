import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBV5Si85XohwEi33dl8wUAewozrDHe1Nbk",
  authDomain: "walkinunity.firebaseapp.com",
  projectId: "walkinunity",
  storageBucket: "walkinunity.appspot.com",
  messagingSenderId: "134808636913",
  appId: "1:134808636913:web:ba18cddb0d9c2715ce8850",
  measurementId: "G-3RTW0KQ6JS"
};

const app = initializeApp(firebaseConfig);
export default app;
