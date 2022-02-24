import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCq4P8ihKaR3HcM0I4DJDX2jbOGbPz1D4k",
    authDomain: "netflix-clone-demo-69363.firebaseapp.com",
    projectId: "netflix-clone-demo-69363",
    storageBucket: "netflix-clone-demo-69363.appspot.com",
    messagingSenderId: "636852356591",
    appId: "1:636852356591:web:89b3354ac174bef354221a"
  };

  // const firebaseApp = Firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  // const auth = Firebase.auth();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  //const getUserCred = createUserWithEmailAndPassword();


  export { auth, db }
 