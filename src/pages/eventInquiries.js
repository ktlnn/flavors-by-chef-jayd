import React from "react";
import ContactForm from "../components/ContactForm";

import "../App.css";

function EventInquiries() {

    return(
        <>
        <img className="logo" src={process.env.PUBLIC_URL+"/assets/flavors-logo-2.png"} alt="flavors-logo"></img>
        <h1 id="event-title">Event Information</h1>
        <ContactForm />
        </>
        
    )
}

export default EventInquiries;