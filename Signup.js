import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

import style from "./Signin.module.css";

const auth = getAuth(app);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const createUser = () => {
    if (!email || !password) {
      seterror("Fill all Field");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => navigate("/"), setEmail(""), setPassword(""))

      .catch((err) => {
        seterror(err.message);
      });
  };

  return (
    <div>
      <div className={style.left}>
        <p className={style.board}>Board.</p>
      </div>

      <div className={style.right}>
        <p className={style.signup}>Sign Up</p>
        <p className={style.signup2}>Sign up to create new account</p>
        <div className={style.card}>
          <label className={style.email}>Email</label>
          <input
            className={style.inputfield}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Enter email"
          ></input>
          <label className={style.password}>Password</label>
          <input
            className={style.inputfield}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
          <br />
          <p className={style.errormsg}>{error}</p>

          <div >
            <button className={style.btn} onClick={createUser}>
              SignUp
            </button>
            <Link to="/">
              <button className={style.btn} onClick={() => {}}>
                signin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
