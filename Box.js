import React from "react";
import style from "./Box.module.css";
export default function Box() {
  return (
    <div className={style.mainbox}>
      <div className={style.box1}>
        <p className={style.text}>Total Revenue</p>
        <p className={style.number}>$2,129,430</p>
      </div>
      <div className={style.box2}>
        <p className={style.text} >Total Transactions</p>
        <p className={style.number} >1,520</p>
      </div>
      <div className={style.box3}>
        <p className={style.text} >Total Likes</p>
        <p className={style.number} >9,721</p>
      </div>
      <div className={style.box4}>
        <p className={style.text} >Total Users</p>
        <p className={style.number} >892</p>
      </div>
    </div>
  );
}
