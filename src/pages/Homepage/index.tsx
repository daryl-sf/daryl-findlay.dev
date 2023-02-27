import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import classes from "./Homepage.module.css";
import { setUpFirebase } from "../../lib/firebase";
import SignInButton from "../../components/SignInButton";
import SignOut from "../../components/SignOut";
import { trackPageView } from "../../util/analytics";

const Homepage = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    setUpFirebase();
    onAuthStateChanged(getAuth(), setUser);
    trackPageView();
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.controls}>
        {user && (<><p>Welcome {user.displayName}</p><SignOut /></>)}
        {!user && <SignInButton />}
      </div>
      <section className={classes.main}>
        <h1 className={classes.h1}>Hello, I&apos;m <span className={classes.name}>Daryl Findlay</span>!</h1>
        <h2>Full Stack Software Engineer.</h2>
        <h2>🚧 Under construction 🚧</h2>
        <a href="mailto:darylfindlay@gmail.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hi%20Daryl%2C%20I'm%20interested%20in%20your%20work.%20Let's%20connect!" className={classes.contact}>Get In Touch</a>
        {/* <div className={classes.desc}>
          <p>I&apos;m a software engineer with 10 years industry experience. Focus on frontend UI/UX design with modern FE frameworks and build tools like React, Vite and Nextjs. Graduated with Bachelor of Science in Computer Science from University of Ulster.</p>
          <p>JavaScript & TypeScript, NextJS, Vite, NodeJS, React, Express, Ruby on Rails and various testing packages.</p>
        </div> */}
      </section>
    </div>
  );
};

export default Homepage;