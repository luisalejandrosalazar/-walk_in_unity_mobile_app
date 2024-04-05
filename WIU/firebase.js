import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQKAAnJyCpGJnOBD4_vuvLDoIhNZ8zc9Q",
  authDomain: "walkin-unity.firebaseapp.com",
  projectId: "walkin-unity",
  storageBucket: "walkin-unity.appspot.com",
  messagingSenderId: "539378214336",
  appId: "1:539378214336:web:cdbc22d706b202d4145425",
  //measurementId:
};

const app = initializeApp(firebaseConfig);
export default app;
