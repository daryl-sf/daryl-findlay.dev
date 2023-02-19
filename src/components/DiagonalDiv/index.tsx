import React, { ReactNode } from "react";
import classes from "./classes.module.css";

export type Props = {
  children: ReactNode;
  className?: string;
};

const DiagonalDiv = ({ children, className }: Props) => (
  <div className={`${classes.diagonal} ${className}`}>
    <div className={`${classes.wrapper}`}>
      {children}
    </div>
  </div>
);

export default DiagonalDiv;
