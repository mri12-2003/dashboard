import React from "react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";


export default function Sidebar() {
  return (
    <div className={style.left}>
      <div>
        <p className={style.board}>Board.</p> <br />
      </div>
      <div className={style.leftbottom}>
        <Link to="/Mainpage" className={style.dashboard}>
          <i class="fa-regular fa-user"></i>
          Dashboard
        </Link>
        <Link to="/Transaction" className={style.transaction}>
          <i class="fa-regular fa-user"></i> Transaction
        </Link>
        <br />
        <Link to="/Schedules" className={style.schedules}>
          <i class="fa-solid fa-gear"></i>Schedules
        </Link>
        <br />
        <Link to="/Users" className={style.users}>
          {/* style="color: #ffffff;" */}
          <i class="fa-regular fa-user"></i>
          Users
        </Link>
        <br />
        <Link to="/Settings" className={style.setting}>
          <i class="fa-solid fa-gear"></i>
          Settings
        </Link>
        <br />

        <p className={style.help}>Help</p>
        <p className={style.contact}>Contact Us</p>
      </div>

      {/* <div className={style.right}>
        <p>right part </p>
      </div> */}
    </div>
  );
}
