import React from "react";
import classes from "./App.module.css";
import DiagonalDiv from "./components/DiagonalDiv";
import { Hexagon, HexGrid } from "./components/Hexagon";

const App = () => {
  return (
    <div className="App">
      <DiagonalDiv>
        <section>
          <h1 className={classes.h1}>Hello, I&apos;m Daryl!</h1>
          <h2>Full Stack Software Engineer.</h2>
          <a href="mailto:darylfindlay@gmail.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hi%20Daryl%2C%20I'm%20interested%20in%20your%20work.%20Let's%20connect!" className={classes.contact}>Get In Touch</a>
          <div className={classes.desc}>
            <p>I&apos;m a software engineer with 10 years industry experience. Focus on frontend UI/UX design with modern FE frameworks and build tools like React, Vite and Nextjs. Graduated with Bachelor of Science in Computer Science from University of Ulster.</p>
            <p>JavaScript & TypeScript, NextJS, Vite, NodeJS, React, Express, Ruby on Rails and various testing packages.</p>
          </div>
        </section>
      </DiagonalDiv>
      <HexGrid>
        <Hexagon><p>Daryl Findlay</p></Hexagon>
        <Hexagon><p>Daryl Findlay</p></Hexagon>
        <Hexagon><p>Daryl Findlay</p></Hexagon>
        <Hexagon><p>Daryl Findlay</p></Hexagon>
        <Hexagon><p>Daryl Findlay</p></Hexagon>
        <Hexagon><p>Daryl Findlay</p></Hexagon>
      </HexGrid>
    </div>
  );
};

export default App;
