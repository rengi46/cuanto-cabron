import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
    appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
