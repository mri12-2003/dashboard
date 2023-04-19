import React from "react";
import style from "./Rightpart.module.css";
import Navbar from "./Navbar";
import Box from "./Box";
import Graph from "./Graph";
import Details from "./Details";
export default function Rightpart() {
  return (
    <div>
      <div className={style.main}>
        <Navbar />
        <Box/>
        <Graph/>
        <Details/>

      </div>
    </div>
  );
}
