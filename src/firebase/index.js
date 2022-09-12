import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBB9l8cyfJmE-J81CSoyPj9T8bT5g14hvQ",
  authDomain: "vue-blog-12c73.firebaseapp.com",
  databaseURL: "https://vue-blog-12c73-default-rtdb.firebaseio.com",
  projectId: "vue-blog-12c73",
  storageBucket: "vue-blog-12c73.appspot.com",
  messagingSenderId: "646944683509",
  appId: "1:646944683509:web:9499beca708c95a4a69cbc",
  measurementId: "G-Y6F8V2EE7X"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }

