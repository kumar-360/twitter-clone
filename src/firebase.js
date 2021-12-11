import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCXYZYJn7_FZqvT-_gd6vyKd1h0SLjOxrw",
    authDomain: "twitter-clone-1284b.firebaseapp.com",
    projectId: "twitter-clone-1284b",
    storageBucket: "twitter-clone-1284b.appspot.com",
    messagingSenderId: "763566839227",
    appId: "1:763566839227:web:1330cba3ac704d9d48609e",
    measurementId: "${config.measurementId}"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;