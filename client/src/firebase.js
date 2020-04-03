// import * as firebase from "firebase/app";

// import "firebase/auth";

import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/firebase-storage";
import { v4 as uuidv4 } from "uuid";

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
  measurementId: "G-NLLS0B8PMW",
};

// export default app;

// app.initializeApp(config);

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage().ref();
  }

  async getCaracterizacionesExtrajudicial() {
    var caracterizaciones = [];
    var caracts = await this.db
      .collection("caracterizacionesExtrajudiciales")
      .get();
    caracts.docs.forEach((caracterizacion) => {
      caracterizaciones.push(caracterizacion.data());
    });

    return caracterizaciones;
  }
  async downloadFile(fileId) {
    // var storageRef = await this.storage.child(
    //   "plantillas/Plantilla-Agregar-Cuentas.xlsx"
    // );
  }

  async addGestion(gestion) {
    await this.db.collection("gestiones").add(gestion);
  }
  async downloadForm(form) {
    if (form === 0) {
      var storageRef = await this.storage.child(
        "plantillas/Plantilla-Agregar-Cuentas.xlsx"
      );
      var url = await storageRef.getDownloadURL();

      return url;
    } else if (form === 1) {
      return false;
    }
  }
  async uploadFile(file, uid) {
    try {
      var bufeteId = await this.getUserBufete(uid);

      var date = new Date(Date.now());
      var uuid = uuidv4();
      var metadata = {
        customMetadata: {
          userUid: `${uid}`,
          bufeteUid: `${bufeteId}`,
          tipo: "AGREGAR_NUEVOS_CLIENTES",
          fecha: date,
          uuid: uuid,
        },
      };

      var tmp = await this.storage
        .child(`/${bufeteId}`)
        .child("/AGREGAR-CLIENTES")
        .child(`${uuid}`)
        .put(file, metadata);
      console.log("done");
      console.log(metadata);
    } catch (error) {
      console.log(error);
    }
  }

  async getBufeteData(uid) {
    var bufeteData = await (
      await this.db.collection("bufetes").doc(uid).get()
    ).data();
  }

  async getUserBufete(uid) {
    var userBufete = (
      await this.db.collection("gestores").doc(uid).get()
    ).data();
    return userBufete.bufeteId;
  }
  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    await this.db.collection("gestores").doc(this.auth.currentUser.uid).set({
      email: email,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  async getCuentasGestor() {
    if (this.auth.currentUser) {
      var snapshot = await this.db
        .collection("cuentas")
        .where("gestorId", "==", this.auth.currentUser.uid)
        .orderBy("dataCuenta.nombre")
        .get();
      console.log("termino botener cuentas");
      if (snapshot.empty) {
        return [];
      } else {
        return snapshot.docs;
      }
    }
    return [];

    // .then(snapshot => {
    //   if (snapshot.empty) {
    //     return [];
    //   } else return snapshot.docs;
    // });
  }
}

export default new Firebase();
