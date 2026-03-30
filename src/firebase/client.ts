import { initializeApp, type FirebaseApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQDu_ACKdCAPBGK6lqr9Wk9tmJq1EQkv8",
  authDomain: "michael-grills-portal.firebaseapp.com",
  projectId: "michael-grills-portal",
  storageBucket: "michael-grills-portal.firebasestorage.app",
  messagingSenderId: "228452250112",
  appId: "1:228452250112:web:5191a1c18e7e967c441ee5",
  measurementId: "G-6EBQS6JE9N"
};

// Initialize Firebase
export let firebaseApp:FirebaseApp | undefined;

if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}


// if (firebaseApp) {
//   const analytics = getAnalytics(firebaseApp);
// }