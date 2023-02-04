import classes from "./MBA.module.css";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";
import MBALists from "../MBALists/MBALists";

const MBA = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.cultural}>
      {MBALists.map((list) => {
        return (
          <EventCard
            key={list.id}
            imgSrc={list.imgSrc}
            heading={list.heading}
            redirectLink={list.redirectLink}
          />
        );
      })}
    </div>
  );
};

export default MBA;
