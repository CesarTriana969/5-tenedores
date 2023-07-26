import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9nJPgRf9rfsL2ic-CBohP9xvbPWppirU",
  authDomain: "tenedores-db78b.firebaseapp.com",
  projectId: "tenedores-db78b",
  storageBucket: "tenedores-db78b.appspot.com",
  messagingSenderId: "436006894237",
  appId: "1:436006894237:web:aa92dfd67e3ab26444f274"
};

export const initFirebase = initializeApp(firebaseConfig);