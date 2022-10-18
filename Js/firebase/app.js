  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHJK4aCUuFuHBzB-7iumtjVJsZNfLvZbU",
    authDomain: "mundo-invertido-53ab0.firebaseapp.com",
    projectId: "mundo-invertido-53ab0",
    storageBucket: "mundo-invertido-53ab0.appspot.com",
    messagingSenderId: "893762215647",
    appId: "1:893762215647:web:2dc02b721bbc59b529136a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app;