import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://blog.kakaocdn.net/dn/cd2MQ5/btqx0q65v5Y/mKwQKWKh0HNtslQkgsktE0/img.jpg"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in </h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
          <button className="signin_button" onClick={login}>
            Sign In
          </button>
          <button className="create_button" onClick={register}>
            Create your AMAZON account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
