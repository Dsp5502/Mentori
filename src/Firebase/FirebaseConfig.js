// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC42fQF_qD31f8I6zvgq0mDspkMfpz_fVA',
  authDomain: 'mentori-cf3e4.firebaseapp.com',
  projectId: 'mentori-cf3e4',
  storageBucket: 'mentori-cf3e4.appspot.com',
  messagingSenderId: '607046428114',
  appId: '1:607046428114:web:f2b79571dfd04d0945140b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
