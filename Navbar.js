import React from "react";
import style from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <div className={style.navbar}>
      <div className={style.navbarleft}>
        <p>Dashboard</p>
      </div>

      <div className={style.navright}>
        <p>Search </p>

        <div className={style.icon}>
        <i class="fa-regular fa-bell fa-lg"></i>
        </div>
    
        
      </div>
    </div>
  );
}
