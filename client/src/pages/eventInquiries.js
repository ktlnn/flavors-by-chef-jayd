import React from "react";
import ContactForm from "../components/ContactForm";

import "../App.css";

function EventInquiries() {
  return (
    <>
      <img
        className="logo"
        src={process.env.PUBLIC_URL + "/assets/flavors-logo-2.png"}
        alt="flavors-logo"
      ></img>
      <h1 id="events-header" className="fancy">
        <span>Event Information</span>
      </h1>
      <p id="events-blurb">
        Thank you for your interest in Flavors by Chef Jay Doshi. Please feel
        free to use the form below <br></br>to contact us about catering your
        next event or any questions and comments you may have. Flavors is
        committed to <br></br> creating {" "}
      </p>
      <ContactForm />
    </>
  );
}

export default EventInquiries;
