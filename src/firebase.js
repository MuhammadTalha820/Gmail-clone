import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5C1A2XmXPzYq9lqgDmJ3mnf5BgdlBLKo",
    authDomain: "clone-yt-1b6e6.firebaseapp.com",
    projectId: "clone-yt-1b6e6",
    storageBucket: "clone-yt-1b6e6.appspot.com",
    messagingSenderId: "846444645298",
    appId: "1:846444645298:web:62c7ec294a1d54e9dc72ab",
    measurementId: "G-CPK20HTXRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();