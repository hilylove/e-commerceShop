import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7ywgOXVBu2s-HF1ELYpY9mgeud4cdedU",
  authDomain: "crwn-clothing-db-7cbaf.firebaseapp.com",
  projectId: "crwn-clothing-db-7cbaf",
  storageBucket: "crwn-clothing-db-7cbaf.appspot.com",
  messagingSenderId: "650977400446",
  appId: "1:650977400446:web:a3eff34b8998cd31502a2f",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
