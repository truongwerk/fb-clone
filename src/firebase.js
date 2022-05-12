import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA6UmZvip3YzLwzZeF8KDIyEK9c2GUXwio",
	authDomain: "facebook-clone-38694.firebaseapp.com",
	projectId: "facebook-clone-38694",
	storageBucket: "facebook-clone-38694.appspot.com",
	messagingSenderId: "104798208460",
	appId: "1:104798208460:web:354f232e798a147ccadd69",
	measurementId: "G-YX0G76RNX3",
};

// initialize firebase and firestore.
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };

export default db;
