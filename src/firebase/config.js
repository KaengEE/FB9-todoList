import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 개인설정
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// 초기설정
const app = initializeApp(firebaseConfig);

// DB 초기화
const db = getFirestore();

export { db };
