// initializing firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"; // Import other Firebase services as needed
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADxkQAbeai5yHTuyj_ocC1zNRJIriPLM",
  authDomain: "auth-app-6f78a.firebaseapp.com",
  projectId: "auth-app-6f78a",
  storageBucket: "auth-app-6f78a.appspot.com",
  messagingSenderId: "752533148797",
  appId: "1:752533148797:web:a3d4ede611558a64248d14",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth();

// Sign Up with email and password

export async function createUserWithEmailAndPass(email, password) {
  if (!email || !password) {
    console.error("Email and password are required.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    alert("User created!");
    return user;
  } catch (error) {
    const errorMessage = error.message;
    console.log(errorMessage);
    errorMessage === "Firebase: Error (auth/email-already-in-use)."
      ? alert("Account Already exists. Try signing In.")
      : alert(errorMessage);
  }
}

// SignUp with Google

const googleProvider = new GoogleAuthProvider();

export async function signInWithGooglePopUp() {
  signInWithPopup(auth, googleProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
      console.log(email);

      // ...
    });
}
