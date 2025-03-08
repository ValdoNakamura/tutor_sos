import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-m99IPWctj4hRywE3okrBo5D_tPQX-BM",
  authDomain: "tutor-sos-db.firebaseapp.com",
  projectId: "tutor-sos-db",
  storageBucket: "tutor-sos-db.appspot.com",
  messagingSenderId: "783129125513",
  appId: "1:783129125513:web:d25edf49c6fbead6005c58",
  measurementId: "G-J0LJERE9GT",
};

let app, FireBase_Auth;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  FireBase_Auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  FireBase_Auth = getAuth(app);
}

const FireBase_DB = getFirestore(app);

export { app, FireBase_Auth, FireBase_DB, onAuthStateChanged };
