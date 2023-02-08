import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
import Logo from "./header_logo.png";
import { Avatar } from "@mui/material";
const Logo1 = require("./tm logo.png");

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.row}>
        <div className={classes.col}>
          <img className={classes.karma} src={Logo} alt="Karma logo" />
          <p className={classes.para}>
          The TechnoVision event, held annually by the esteemed JSPM group of Institutes, enables brilliant minds to develop 
          in an interactive, dynamic, and enjoyable environment. It not only increases students' soft skills but also their technical knowledge. 
          This event unites students together, providing them with a valuable opportunity to expand their skills and gain hands-on experience.
          </p>
        </div>

        <div className={classes.col}>
          <h3>Contact us</h3>
          <p>JSPM Narhe Technical Campus</p>
          <p>Survey No. 12/2/2 & 14/9, Pune Bangalore Highway, </p>
          <p>Taluka Haveli, Narhe, </p>
          <p> Pune, Maharashtra 411041</p>
          <p className={classes.email}>jspmtechminds2022@gmail.com</p>
          <p className={classes.contactNo}>Developers</p>
          <p className={classes.contactNo}>Mrudul Patel - 8698793479</p>
          <p className={classes.contactNo}>Atharva Kurumbhatte - 9422202294</p>
          <p className={classes.contactNo}>Ashwin Kapile - 9370206138</p>
        </div>

        <div className={`${classes.col} ${classes.links}`}>
          <h3>Links</h3>
          <ul>
            <HashLink
              to="/#about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>About</li>
            </HashLink>

            <HashLink
              to="/#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Contact us</li>
            </HashLink>

            {/* <a
              href="https://docs.google.com/document/d/1cJfjOhoEfW_JhiMF-tUJXNWwRKxSIN-KrIlJCnh0EZ4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Privacy policy</li>
            </a> */}

            {/* <a
              href="https://docs.google.com/document/d/1VOnAodNTeF8ShOCxxVb_AXnxLKg2jKZCUY0QxbQd4nE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Terms and condition</li>
            </a>

            <a
              href="https://docs.google.com/document/d/1K0En27BTf6KJB2eHZmnr7BAMDWK8T83--8HJOu-GkA0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Refund & Cancellation Policy</li>
            </a>
            <a
              href="https://docs.google.com/document/d/1DVGB-PePPd7XCNW4LAJ6qBShudKzBJtuaAaiC6Q1DWY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Shipping Policy</li>
            </a> */}
          </ul>
        </div>

        <div className={classes.col}>
          <h3>Follow us on</h3>
          <div className={classes.socialIcons}>
            <a
              href="https://instagram.com/karma.kmct"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCKM314A0KndJAEpvEnaxO2g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faYoutube} />
            </a>
            <a
              href="https://www.facebook.com/karma.kmct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faFacebook} />
            </a>
          </div>
          <div
            className={classes.col}
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <p>Live Views: </p>
            <img
              src="https://hits.serv.rs/live/t43ssmlktqfi5gejzdfyf?font=Futura"
              height="30"
              alt="live_views"
            />
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.copyrights}>
        <img alt="logo" src={Logo1} className={classes.logo} />
        <p className={classes.copyright}>
          <a
            style={{ textDecoration: "none", color:"white" }}
            href="https://techminds-jspm.netlify.app"
          >
            &nbsp;&nbsp;TechMinds {new Date().getFullYear()}
          </a>{" "}
          | Copyright &#169; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
