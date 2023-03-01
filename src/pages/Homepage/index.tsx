import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.app}>
      <section>
        <h1 className={classes.h1}>Hello, I&apos;m <span className={classes.name}>Daryl Findlay</span>!</h1>
        <h2>🚧 Under construction 🚧</h2>
        <p>Learning new build tools and infrastructure is easier than thinking up good content to put in here 🤔</p>
        <p>It will probably turn in to a blog that is sporadically updated. Maybe a list of open source projects (the ones I finish anyway).</p>
        <p>At least I&apos;ve learned about Firebase and Vite and have a decent template to start other projects from.</p>
        <p>But nevermind that and look at the fancy background text clipped gradient transition 🤩</p>
        <a href="mailto:darylfindlay@gmail.com?subject=I'm%20interested%20in%20hiring%20you!&body=Hi%20Daryl%2C%20I'm%20interested%20in%20your%20work.%20Let's%20connect!" className={classes.contact}>Get In Touch</a>
      </section>
    </div>
  );
};

export default Homepage;
