// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDow8r_KXsggkq3JoarYp24Nl2w9qZTQnA",
  authDomain: "event-management-bffd2.firebaseapp.com",
  projectId: "event-management-bffd2",
  storageBucket: "event-management-bffd2.appspot.com",
  messagingSenderId: "209961485052",
  appId: "1:209961485052:web:0588b512e9a1f3f4000d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app