import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Signin.module.css";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export default function Signin() {
  const [email, setEmail] = useState("s@gmail.com");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => navigate("/Mainpage"))

      .catch((err) => alert("invalid data "));

    setEmail("");
    setPassword("");
  };

  const signupwithgoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <div className={style.left}>
        <p className={style.board}>Board.</p>
      </div>
      <div className={style.right}>
        <p className={style.signin}>Sign In</p>
        <p className={style.signin2}>Sign in to your account</p>

        <button className={style.google} onClick={signupwithgoogle}>
          <i className="fa-brands fa-google fa-xl "></i>
          Sign in with Google
        </button>

        <button className={style.apple}>
          <i className="fa-brands fa-apple fa-2xl"></i>
          sign up with apple{" "}
        </button>
        <div className={style.card}>
          <label className={style.email}>Email address</label>

          <input
            className={style.inputfield}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          ></input>

          <label className={style.password}>Password</label>
          <input
            className={style.inputfield}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          ></input>

          <Link to="/Recoverpass" className={style.forget}>
            Forget Password?
          </Link>
          <br />
          <button onClick={signInUser} className={style.btn}>
            sign In
          </button>
        </div>
        <span className={style.noaccount}>
          Don't have an account?
          <Link to="/Signup" className={style.register}>
            Register here
          </Link>
        </span>
      </div>
    </div>
  );
}
