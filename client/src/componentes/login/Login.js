import React, { useState } from "react";
import "./Login.css";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import firebase from "../../firebase";
// import app from "../../firebase";
const Login = props => {
  const [email, editEmail] = useState("");
  const [password, editPassword] = useState("");

  // async function createUser() {
  //   try {
  //     await app.auth().createUserWithEmailAndPassword(email, password);
  //     props.history.push("/dashboard");
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  const handleSubmit = e => {
    e.preventDefault();
    firebase
      .login(email, password)
      .then(() => {
        props.history.replace("/dashboard");
      })
      .catch(error => {
        alert(error);
      });
  };
  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <div className="form">
        <span className="p-float-label ">
          <InputText
            id="in"
            value={email}
            onChange={e => editEmail(e.target.value)}
            className="email"
          />
          <label htmlFor="in">Correo</label>
        </span>

        <Password
          value={password}
          feedback={false}
          className="password"
          onChange={e => editPassword(e.target.value)}
        />
        <Button label="Iniciar sesion" className="p-button-success " id="btn" />
      </div>
    </form>
  );
};

export default Login;
