import { useParams } from "react-router-dom";
import classes from "./EventDetail.module.css";
import Background from "../../UI/Background";
import CulturalLists from "./CulturalLists";
import { useState } from "react";
import Form from "./Form/Form";

const CulturalDetail = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  console.log(params.id);

  const culturalDetail = CulturalLists.filter(
    (event) => params.id === event.name
  );

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={culturalDetail[0]?.imgSrc}
              alt={culturalDetail[0].heading}
            />
          </div>
          <div className={classes.scrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{culturalDetail[0].heading}</h3>
              <p className={classes.para}>{culturalDetail[0].para}</p>
              <h3 className={classes.heading}> Rules & Guidelines</h3>
              <p className={classes.para}>{culturalDetail[0].rule1}</p>
              <p className={classes.para}> {culturalDetail[0].rule2}</p>
              <p className={classes.para}>{culturalDetail[0].rule3}</p>
              <p className={classes.para}>{culturalDetail[0].rule4}</p>
              <p className={classes.para}>{culturalDetail[0].rule5}</p>
              <p className={classes.para}>{culturalDetail[0].rule6}</p>
              <p className={classes.para}>{culturalDetail[0].rule7}</p>
              <p className={classes.para}>{culturalDetail[0].rule8}</p>
              <p className={classes.para}>{culturalDetail[0].rule9}</p>
              <p className={classes.para}>{culturalDetail[0].rule11}</p>
              <p className={classes.para}>{culturalDetail[0].rule12}</p>
              <p className={classes.para}>{culturalDetail[0].rule13}</p>
              <p className={classes.para}>{culturalDetail[0].rule14}</p>
              <p className={classes.para}>{culturalDetail[0].rule15}</p>
              <p className={classes.fees}>
                Registration fees: ₹
                <span className={classes.amount}>
                  {culturalDetail[0].regFee}
                </span>
              </p>

              <p className={classes.cont}>
                Contact - {culturalDetail[0].contact1}
              </p>
              <p className={classes.cont}>
                Contact - {culturalDetail[0].contact2}
              </p>

              <button
                onClick={() => setOpen(!open)}
                className={classes.btn}
              >
                Register Now !
              </button>
            </div>
          </div>
        </div>
      </Background>
      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default CulturalDetail;
