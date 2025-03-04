import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-m99IPWctj4hRywE3okrBo5D_tPQX-BM",
    authDomain: "tutor-sos-db.firebaseapp.com",
    projectId: "tutor-sos-db",
    storageBucket: "tutor-sos-db.firebasestorage.app",
    messagingSenderId: "783129125513",
    appId: "1:783129125513:web:d25edf49c6fbead6005c58",
    measurementId: "G-J0LJERE9GT",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const FireBase_Auth = getAuth(app);
const FireBase_DB = getFirestore(app);

export { app, FireBase_Auth, FireBase_DB, onAuthStateChanged };
