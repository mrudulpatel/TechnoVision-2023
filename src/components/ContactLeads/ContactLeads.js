import react from 'react';
import "./ContactLeads.css";

const ContactLeads = () => {
  return (
    <section className="contact-main">
      <div className="all-cards">
        <div className="single-card cs-card">
          <h1 className="card-front">Computer Science</h1>
          <h1 className="card-back">hello</h1>
        </div>
        <div className="single-card">
          <h1 className="card-front">E&TC</h1>
          <h1 className="card-back">hello</h1>
        </div>
        <div className="single-card">
          <h1 className="card-front">Mechanical</h1>
          <h1 className="card-back">hello</h1>
        </div>
        <div className="single-card">
          <h1 className="card-front">Civil</h1>
          <h1 className="card-back">hello</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactLeads;
