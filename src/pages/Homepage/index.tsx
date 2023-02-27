import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.app}>
      <section>
        <h1 className={classes.h1}>Hello, I&apos;m <span className={classes.name}>Daryl Findlay</span>!</h1>
        <h2>Full Stack Software Engineer.</h2>
        <h2>🚧 Under construction 🚧</h2>
        <a href="mailto:darylfindlay@gmail.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hi%20Daryl%2C%20I'm%20interested%20in%20your%20work.%20Let's%20connect!" className={classes.contact}>Get In Touch</a>
      </section>
    </div>
  );
};

export default Homepage;
