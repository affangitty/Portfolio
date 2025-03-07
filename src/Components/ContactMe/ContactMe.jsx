import React from "react";
import "./ContactMe.css";

function ContactMe() {
  return (
    <section className="contactSection" id="contactMe">
      <div className="contactForm">
        <h1>Contact Me</h1>
        <form>
          <div className="formContent">
            <label htmlFor="clientName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="clientName"
              placeholder="Enter your name"
            />
          </div>
          <div className="formContent">
            <label htmlFor="clientEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="clientEmail"
              placeholder="Enter your email address"
            />
          </div>
          <div className="formContent">
            <label htmlFor="clientPhone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="clientPhone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="formContent">
            <label htmlFor="clientMessage" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="clientMessage"
              placeholder="Type your message"
            ></textarea>
          </div>
          <div className="formContent form-check">
            <input type="checkbox" className="form-check-input" id="isclient" />
            <label className="form-check-label" htmlFor="isclient">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
