import { initializeApp } from "firebase/app";






const firebaseConfig = {
  apiKey: "AIzaSyBBoBzt33tvRWq4_HBrT_WXVFZ1CbgzjJc",
  authDomain: "miproyectoreact-cb0c0.firebaseapp.com",
  projectId: "miproyectoreact-cb0c0",
  storageBucket: "miproyectoreact-cb0c0.appspot.com",
  messagingSenderId: "337777043766",
  appId: "1:337777043766:web:2de8b40f816a11619b6b97"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);