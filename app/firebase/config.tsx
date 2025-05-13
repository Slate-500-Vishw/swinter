import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDtTQuU9pmqYVLN8CgKO0Gq6-W2bf_Y_JQ",
  authDomain: "swinter-b04e6.firebaseapp.com",
  projectId: "swinter-b04e6",
  storageBucket: "swinter-b04e6.firebasestorage.app",
  messagingSenderId: "487214374989",
  appId: "1:487214374989:web:d2c4bf78e5ebc7189abc04",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();
const google_provider = new GoogleAuthProvider();

export {app, provider, auth, google_provider}