import { useParams } from "react-router-dom";
import classes from "./GamesDetail.module.css";
import Background from "../../UI/Background";
import GamesLists from "./GamesLists";
import { useEffect, useState } from "react";
import Form from "./Form/Form";

const GamesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = useState(false);

  const params = useParams();
  console.log(params.id);

  const games = GamesLists.filter((event) => params.id === event.name);

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img className={classes.img} src={games[0].imgSrc} alt="Hi Kmct" />
          </div>

          <div className={classes.ScrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{games[0].heading}</h3>
              <p className={classes.para}>{games[0].para}</p>
              <h3 className={classes.heading}>Game Rules</h3>

              {games[0].rules.map((map) => {
                return <p className={classes.para}>{map}</p>;
              })}

              <p className={classes.fees}>
                Registration fees:
                <span className={classes.amount}>{games[0].regFee}</span>
              </p>

              <a
                href={games[0].paymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.btn} onClick={() => setOpen(!open)}>
                  Register Now!
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

export default GamesDetail;
