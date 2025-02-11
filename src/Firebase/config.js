import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyDBzENY59auVKCJakg41_tF_-FM-KBE2zA",
  authDomain: "holo-beauty.firebaseapp.com",
  databaseURL: "https://holo-beauty-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "holo-beauty",
  storageBucket: "holo-beauty.firebasestorage.app",
  messagingSenderId: "583814296195",
  appId: "1:583814296195:web:6d140cb7824076fdd921b6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth(app);


// REALTIME DATABASE ORIGINAL RULES
// {
//   /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }