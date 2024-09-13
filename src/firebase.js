import { initializeApp } from "firebase/app";


const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const DATA_BASE_URL = import.meta.env.VITE_DATA_BASE_URL;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const API_ID = import.meta.env.VITE_API_ID;
const MEASUREMENT_ID = import.meta.env.VITE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATA_BASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: API_ID,
  measurementId: MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);


