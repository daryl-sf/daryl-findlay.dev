import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import classes from "./App.module.css";
import DiagonalDiv from "./components/DiagonalDiv";
import { setUpFirebase } from "./lib/firebase";
import SignInButton from "./components/SignInButton";
import SignOut from "./components/SignOut";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUpFirebase();
    onAuthStateChanged(getAuth(), setUser);
  }, []);

  return (
    <div className="App">
      <br />
      {user && (<><p>Welcome {user.displayName}</p><SignOut /></>)}
      {!user && <SignInButton />}
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
    </div>
  );
};

export default App;
