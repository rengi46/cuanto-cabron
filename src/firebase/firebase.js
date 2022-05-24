import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBk9hdu9IjK4xrK4TGlOSTJBlZzWZLrYG8",
    authDomain: "cuantocabronreto.firebaseapp.com",
    projectId: "cuantocabronreto",
    storageBucket: "cuantocabronreto.appspot.com",
    messagingSenderId: "866239169926",
    appId: "1:866239169926:web:2fc51770d850d2fada9807",
    measurementId: "G-P1QHYK849M"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
