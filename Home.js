import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css"
export default function Home() {
  return (
    <div className={style.home}>
      <Link to="/Signin">Signin</Link>
      <br />

      <Link to="/Signup">Sign Up</Link>
      <br/>
     
    </div>
  );
}
