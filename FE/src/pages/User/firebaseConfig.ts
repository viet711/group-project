// Trong tệp firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyAxVF5TG_q5pAgf7rmUwIjn-PlDM0GCxZQ",
  authDomain: "react-75c7d.firebaseapp.com",
  projectId: "react-75c7d",
  storageBucket: "react-75c7d.appspot.com",
  messagingSenderId: "470690156362",
  appId: "1:470690156362:web:9711493483ba493f157bb3",
  measurementId: "G-95PG8LTJM5"
  };

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Export the firebase auth instance
export const auth = getAuth(app);