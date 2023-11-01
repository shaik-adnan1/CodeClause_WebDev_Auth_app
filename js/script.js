import {
  createUserWithEmailAndPass,
  signInWithGooglePopup,
  signInWithFacebookPopUp,
} from "./utils.js";

const signUpButton = document.getElementById("signUp_btn");
const signUp_name = document.getElementById("signUp_name");
const signUp_email = document.getElementById("signUp_email");
const signUp_password = document.getElementById("signUp_password");

const signInButton = document.getElementById("signIn_btn");
const signIn_email = document.getElementById("signIn_email");
const signIn_password = document.getElementById("signIn_password");
const signIn_googleBtn = document.getElementById("signIn_google");
const signIn_facebookBtn = document.getElementById("signIn_facebook");

// SignUp handlers

signUpButton.addEventListener("click", e => {
  e.preventDefault();
  createUserWithEmailAndPass(signUp_email.value, signUp_password.value);
});
// SignIn handlers

signInButton.addEventListener("click", e => {
  e.preventDefault();
  console.log(signIn_email.value);
  console.log(signIn_password.value);
});

signIn_googleBtn.addEventListener("click", async e => {
  e.preventDefault();
  const userDetails = await signInWithGooglePopup();
  console.log(userDetails);
});

signIn_facebookBtn.addEventListener("click", async e => {
  e.preventDefault();
  const userDetails = await signInWithFacebookPopUp();
  console.log(userDetails);
});
