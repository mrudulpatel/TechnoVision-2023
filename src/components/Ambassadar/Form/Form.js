import classes from "./Form.module.css";
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import db from "./firebase";
import { doc, setDoc } from "firebase/firestore";

const Form = (props) => {
  const [open, setOpen] = useState(false);
  const [fullName, setfullName] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNo, setNumber] = useState();
  const [dept, setDept] = useState("");
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [finalId, setFinalID] = useState("");
  const [flag, setFlag] = useState(false);

  const nameHandler = (event) => {
    setfullName(event.target.value);
  };

  const mailHandler = (event) => {
    setMail(event.target.value);
  };
  const numberHandler = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    setID("TV" + Math.floor(Math.random() * 100000));
  }, []);

  const compEvents = ["Project Poster Presentation", "E-Gaming", "i-Start"];

  const entcEvents = ["Circuit Mania", "Game of Code", "Speed Heist"];

  const civilEvents = ["Memory Event", "Bridge Crafting", "Bollywood Quiz"];

  const mechEvents = ["Box Cricket", "Overdrive", "Catholic"];

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    let checkboxes = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    if (checkboxes.length === 0) {
      alert("Please select at least 1 event");
    } else {
      checkboxes.forEach((checkbox) => {
        arr.push(checkbox.value);
      });
      console.log(arr);
      const docRef = doc(db, `participants/${id}`);
      setDoc(docRef, {
        id: id,
        name: fullName,
        email: mail,
        phoneNo: phoneNo,
        dept: dept,
        year: year,
        events: arr,
      }).then(() => {
        console.log("Saved");
        setDept("");
        setMail("");
        setNumber("");
        setYear("");
        setfullName("");
        setFlag(true);
        setFinalID(id);
      });
    }
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      {flag === false ? (
        <div className={classes.backdrop}>
          <div className={classes.bkdHeadingBox}>
            <h3 className={classes.bkdHeading}>
              Register for TechnoVision Events
              <p className={classes.input}>Registration ID: {id}</p>
            </h3>
            <div onClick={props.onClick} className={classes.close}>
              <FontAwesomeIcon icon={faXmark} size="3x" />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={classes.inputBox}>
              <input
                placeholder="Full Name"
                type="text"
                className={classes.input}
                onChange={nameHandler}
                value={fullName}
                required
              />
              <input
                placeholder="Email"
                type="email"
                className={classes.input}
                onChange={mailHandler}
                value={mail}
                required
              />
              <input
                placeholder="Phone number"
                type="tel"
                className={classes.input}
                onChange={numberHandler}
                value={phoneNo}
                required
              />
              {/* DEPARTMENTS */}
              <select
                name="events"
                onChange={(e) => setDept(e.target.value)}
                id="events"
                className={classes.input}
                required
              >
                <option value="-1" style={{ color: "black" }}>
                  Select your Department
                </option>
                <option value="Computer" style={{ color: "black" }}>
                  Computer Engineering
                </option>
                <option value="Civil" style={{ color: "black" }}>
                  Civil Engineering
                </option>
                <option value="Mechanical" style={{ color: "black" }}>
                  Mechanical Engineering
                </option>
                <option value="E&TC" style={{ color: "black" }}>
                  E&TC Engineering
                </option>
              </select>
              {/* YEAR */}
              <select
                name="year"
                onChange={(e) => setYear(e.target.value)}
                className={classes.input}
                id="year"
              >
                <option value="-1" style={{ color: "black" }}>
                  Select Year
                </option>
                <option value="FE" style={{ color: "black" }}>
                  F.E.
                </option>
                <option value="SE" style={{ color: "black" }}>
                  S.E.
                </option>
                <option value="TE" style={{ color: "black" }}>
                  T.E.
                </option>
                <option value="BE" style={{ color: "black" }}>
                  B.E.
                </option>
              </select>
              <div></div>
              {/* EVENTS */}
              <div className={classes.input}>
                <p>Events of Computer Department</p>
                {compEvents.map((event, i) => (
                  <>
                    <input
                      value={event}
                      type="checkbox"
                      name={event}
                      id={i + 1}
                    />
                    <label htmlFor={i + 1}> {event}</label>
                    <br />
                  </>
                ))}
              </div>
              <div className={classes.input}>
                <p>Events of Civil Department</p>
                {civilEvents.map((event, i) => (
                  <>
                    <input
                      value={event}
                      type="checkbox"
                      name={event}
                      id={i + 1}
                    />
                    <label htmlFor={i + 1}> {event}</label>
                    <br />
                  </>
                ))}
              </div>
              <div className={classes.input}>
                <p>Events of Mechanical Department</p>
                {mechEvents.map((event, i) => (
                  <>
                    <input
                      value={event}
                      type="checkbox"
                      name={event}
                      id={i + 1}
                    />
                    <label htmlFor={i + 1}> {event}</label>
                    <br />
                  </>
                ))}
              </div>
              <div className={classes.input}>
                <p>Events of E&TC Department</p>
                {entcEvents.map((event, i) => (
                  <>
                    <input
                      value={event}
                      type="checkbox"
                      name={event}
                      id={i + 1}
                    />
                    <label htmlFor={i + 1}> {event}</label>
                    <br />
                  </>
                ))}
              </div>
            </div>
            <button className={classes.btn1} onClick={() => setOpen(!open)}>
              Register
            </button>
          </form>
        </div>
      ) : (
        <div className={classes.backdrop}>
          <div className={classes.bkdHeadingBox}>
            <h3 className={classes.bkdHeading}>
              Thank You for Registering at TechnoVision!!
              <p className={classes.input}>Registration ID: {finalId}</p>
              <p
                className={classes.input}
                style={{ color: "red", fontWeight: "bold" }}
              >
                Please take a screenshot of this id
              </p>
            </h3>
            <div onClick={props.onClick} className={classes.close}>
              <FontAwesomeIcon icon={faXmark} size="3x" />
            </div>
          </div>
        </div>
      )}
    </Backdrop>
  );
};

export default Form;
