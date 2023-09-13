import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCRVNq_AzbNFD3_UxoeK6QEdH8O1z-Ig0c",
    authDomain: "maltimart-20b5d.firebaseapp.com",
    projectId: "maltimart-20b5d",
    storageBucket: "maltimart-20b5d.appspot.com",
    messagingSenderId: "921949134536",
    appId: "1:921949134536:web:1f04e7b4ed40f34982cffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;