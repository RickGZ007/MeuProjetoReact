import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/* CONFIGURAÇÃO VINDO DO .ENV */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};


/* TESTE .ENV */
console.log("API KEY:", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("PROJECT ID:", process.env.REACT_APP_FIREBASE_PROJECT_ID);

/* INICIA FIREBASE */
const app = initializeApp(firebaseConfig);

/* SERVIÇOS */
const auth = getAuth(app);
const db = getFirestore(app);

/* TESTES */
console.log("🔥 Firebase conectado com sucesso!");
console.log("🔐 Auth carregado:", auth);
console.log("🗄️ Firestore carregado:", db);

export { auth, db };
export default app;