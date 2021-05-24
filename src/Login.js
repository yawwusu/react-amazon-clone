import React from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "./lib/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    console.log(email, password);

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push({ pathname: "/" });
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        history.push({ pathname: "/" });
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="Login">
      <Link to="/">
        <img
          className="Login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon"
        />
      </Link>

      <div className="Login-container">
        <h1>SignIn</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Login-signInButton" type="submit" onClick={login}>
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>

        <button className="Login-signUpButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
