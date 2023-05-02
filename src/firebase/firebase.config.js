// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZSH1FsC9kCTkYqWFVCgL63ZFYBEW6j_0",
  authDomain: "master-chef-usa.firebaseapp.com",
  projectId: "master-chef-usa",
  storageBucket: "master-chef-usa.appspot.com",
  messagingSenderId: "407226301420",
  appId: "1:407226301420:web:77fc117c43ccd338ac9ec9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;