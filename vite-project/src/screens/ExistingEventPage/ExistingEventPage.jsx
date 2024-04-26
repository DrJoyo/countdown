import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const ExistingEventPage = () => {
  return (
    <div className="existing-event-page">
      <div className="div">
        <div className="overlap">
          <p className="RRR-WEEK-days">
            <span className="text-wrapper">
              RRR WEEK
              <br />
            </span>
            <span className="span">10 Days left</span>
          </p>
        </div>
        <div className="overlap-group">
          <p className="miami-trip-days">
            <span className="text-wrapper">
              Miami Trip!!!
              <br />
            </span>
            <span className="span">17 Days left</span>
          </p>
        </div>
        <div className="annie-s-wrapper">
          <p className="annie-s">
            <span className="text-wrapper">
              Annie’s 21st Birthday
              <br />
            </span>
            <span className="span">117 Days left</span>
          </p>
        </div>
        <div className="overlap-2">
          <Link className="text-wrapper-3" to="../addedit">Add New Event</Link>
        </div>
        <div className="overlap-3">
          <Link className="text-wrapper-4" to="../event">View Events</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="overlap-4">
          <Link className="text-wrapper-4" to="../event">View Events</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="overlap-5">
          <Link className="text-wrapper-4" to="../event">View Events</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
      </div>
    </div>
  );
};
