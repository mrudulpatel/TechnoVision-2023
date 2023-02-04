import classes from "./Gallery.module.css";
import React from "react";
import Background from "../../UI/Background";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className={classes.gallery}>
      <Background className={classes.eventBox}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            // src="assets/GalleryImages/gallery-vector-trans.svg"
            src="assets/teaser.png"
            alt="Gallery"
          />
        </div>

        <div className={classes.headingBox}>
          <h3 className={classes.heading}>TechnoVision Teasers</h3>
          <p className={classes.para}>
            The programme includes a variety of activities, including technical,
            non-technical, hackathons, and project contests. The event is
            significant in the fields of creativity motivation and technological
            innovation skills among the new age laureates.
          </p>

          <Link
            to="/teasers"
            className={classes.btn}
            rel="noopener noreferrer"
          >
            Watch the Teasers
          </Link>
        </div>
      </Background>
    </section>
  );
};

export default Gallery;
