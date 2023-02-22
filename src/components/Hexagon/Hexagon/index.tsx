import React, { ReactNode, FunctionComponent } from "react";
import classes from "./classes.module.css";

interface IHexagonProps { children: ReactNode }

const Hexagon: FunctionComponent<IHexagonProps> = ({ children }) => {
  return (
    <div className={classes.hexagon}>{children}</div>
  );
};

export type { IHexagonProps };
export default Hexagon;
