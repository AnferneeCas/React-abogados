// import * as firebase from "firebase/app";

// import "firebase/auth";

import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyChBOQ1V5vbK3elc7DGT3rbrZHefLCZEeI",
//   authDomain: "gesth-641d7.firebaseapp.com",
//   databaseURL: "https://gesth-641d7.firebaseio.com",
//   projectId: "gesth-641d7",
//   storageBucket: "gesth-641d7.appspot.com",
//   messagingSenderId: "25971975439",
//   appId: "1:25971975439:web:94c8bcfedfd6256ad04a7a",
//   measurementId: "G-NLLS0B8PMW"
// });

const config = {
  apiKey: "AIzaSyChBOQ1V5vbK3elc7DGT3rbrZHefLCZEeI",
  authDomain: "gesth-641d7.firebaseapp.com",
  databaseURL: "https://gesth-641d7.firebaseio.com",
  projectId: "gesth-641d7",
  storageBucket: "gesth-641d7.appspot.com",
  messagingSenderId: "25971975439",
  appId: "1:25971975439:web:94c8bcfedfd6256ad04a7a",
  measurementId: "G-NLLS0B8PMW"
};

// export default app;

// app.initializeApp(config);

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCuentasGestor() {
    return this.db
      .collection("cuentas")
      .where("gestorId", "==", this.auth.currentUser.uid)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          return;
        } else return snapshot.docs;
      });
  }
}

export default new Firebase();
