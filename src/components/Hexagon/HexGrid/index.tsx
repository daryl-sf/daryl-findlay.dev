import React, { ReactElement, FunctionComponent } from "react";
import { IHexagonProps } from "../Hexagon";
import classes from "./classes.module.css";

interface IHexGridProps {
  children: ReactElement<IHexagonProps> | Array<ReactElement<IHexagonProps>>
}

const HexGrid: FunctionComponent<IHexGridProps> = ({ children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default HexGrid;
