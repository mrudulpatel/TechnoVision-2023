import { useParams } from "react-router-dom";
import classes from "./TechnicalDetail.module.css";
import Background from "../../UI/Background";
import TechnicalLists from "./TechnicalLists";
import { useEffect, useState } from "react";
import Form from "./Form/Form";

const TechnicalDetail = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  console.log(params.id);

  const technical = TechnicalLists.filter((event) => params.id === event.name);
  console.log(technical);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={technical[0].imgSrc}
              alt="poster"
            />
          </div>
          <div className={classes.scrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{technical[0].heading}</h3>
              <p className={classes.para}>{technical[0].headingPara}</p>
              <h3 className={classes.heading}>Certification</h3>
              <p className={classes.para}>{technical[0].certiPara}</p>
              <h3 className={classes.heading}>Event Rounds</h3>

              {technical[0].rules.map((map) => {
                return <p className={classes.para}>{map}</p>;
              })}
              <a
                href={technical[0].paymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button onClick={() => setOpen(!open)} className={classes.btn}>
                  Register Now !
                </button>
              </a>
            </div>
          </div>
        </div>
      </Background>
      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default TechnicalDetail;
