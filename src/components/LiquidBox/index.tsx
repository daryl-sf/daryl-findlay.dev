import React from "react";
import classes from "./classes.module.css";

const LiquidBox = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.liquid} />
      <div className={classes.content}>
        <h1>Daryl Findlay</h1>
        <p>Software Engineer</p>
      </div>
    </div>
  );
};

export default LiquidBox;
