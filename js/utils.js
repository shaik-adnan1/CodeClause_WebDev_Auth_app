// initializing firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBADxkQAbeai5yHTuyj_ocC1zNRJIriPLM",
  authDomain: "auth-app-6f78a.firebaseapp.com",
  projectId: "auth-app-6f78a",
  storageBucket: "auth-app-6f78a.appspot.com",
  messagingSenderId: "752533148797",
  appId: "1:752533148797:web:a3d4ede611558a64248d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// SignUp with Google
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
    if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
      alert("Account already exists. Try signing in.");
    } else {
      alert(errorMessage);
    }
  }
}

// Sign Up with Google
const googleProvider = new GoogleAuthProvider();

export async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // You can access user data here, e.g., user.displayName, user.email, etc.
    alert('you have signed in through google ' + result.user.email)
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    console.log(error)
  }
}

// SignIn with facebook 

const facebookProvider = new FacebookAuthProvider();

export async function signInWithFacebookPopUp() {
  
  signInWithPopup(auth, facebookProvider)
    .then((result) => {
      const user = result.user;
  
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      alert('you have signed in through facebook ' + result.user.email)
      return user;
  
    })
    .catch((error) => {
      // Handling Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      
      email ? alert(`${email} already is use or signedIn`) : alert(errorMessage);
  
      // ...
    });

}

// SignIn with github
const githubProvider = new GithubAuthProvider();

export async function signInWithGithubPopUp() {
  signInWithPopup(auth, githubProvider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user; 
    alert('you have signed in through github ' + result.user.email)

    return user;

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GithubAuthProvider.credentialFromError(error);

    email ? alert(`${email} already is use or signedIn`) : alert(errorMessage);

    // ...
  });

}