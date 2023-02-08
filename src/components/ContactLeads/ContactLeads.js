import React from "react";
import "./ContactLeads.css";

const ContactLeads = () => {
  return (
    <section className="contact-main">
      <div className="all-cards">
        <div className="single-card cs-card">
          <h1 className="card-front">Computer</h1>
          <div className="card-back">
            <h4>DETAILS</h4>
            <p><b>FACULTY COORDINATOR</b></p>
            <ol>
              <li></li>
            </ol>
          </div>
        </div>
        <div className="single-card">
          <h1 className="card-front">Civil</h1>
          <div className="card-back">hello</div>
        </div>
        <div className="single-card">
          <h1 className="card-front">E&TC</h1>
          <div className="card-back">hello</div>
        </div>
        <div className="single-card">
          <h1 className="card-front">Mechanical</h1>
          <div className="card-back">hello</div>
        </div>
      </div>
    </section>
  );
};

export default ContactLeads;
