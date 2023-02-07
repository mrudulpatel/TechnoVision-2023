import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.aboutSec}>
      <div className={classes.about}>
        <div className={classes.details}>
          <h3 className={classes.heading}>About</h3>
          <h2 className={classes.heading1}>TechnoVision</h2>
          <p className={classes.para}>
          
          </p>

          <p className={classes.para}>
            
          </p>
        </div>

        <div className={classes.composition}>
          <img
            className={classes.images}
            src="assets/About/ellipse.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
