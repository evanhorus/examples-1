import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVy78z7-ziI_wg-WMLNFpG9OKMxqGTc6A",
    authDomain: "example-1-1deff.firebaseapp.com",
    projectId: "example-1-1deff",
    storageBucket: "example-1-1deff.appspot.com",
    messagingSenderId: "307501047120",
    appId: "1:307501047120:web:f6cd0bc231b221ae422055"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);