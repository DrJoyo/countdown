import React from "react";
import { useState, createContext, useContext } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const ExistingEventPage = () => {
  const existingEventsString = Cookies.get('events');

  let existingEvents = [];
  if (existingEventsString) {
    existingEvents = JSON.parse(existingEventsString);
  } else {
    existingEvents = [['Name', 2024, 1, 1, 'Notes'], ['Name', 2024, 1, 1, 'Notes'], ['Name', 2024, 1, 1, 'Notes']];
    const contentString = JSON.stringify(existingEvents);
    Cookies.set('events', contentString, { expires: 365, path: '/' });
  }
  const eventCount = existingEvents.length;

  function eventDisplayData(index) {
    if (index < eventCount) {
      const currentDate = new Date();
      const currMS = currentDate.getTime();

      const eventArray = existingEvents[index];
      const eventDate = new Date(eventArray[1], eventArray[2], eventArray[3])
      const eventMS = eventDate.getTime();
      const daysUntil = Math.ceil((eventMS - currMS)/(1000 * 60 * 60 * 24))
      const eventName = eventArray[0];
      return [ eventName, daysUntil ];
    } else {
      return [ "None" , 0 ];
    }
  }

  const [name0, days0] = eventDisplayData(0);
  const [name1, days1] = eventDisplayData(1);
  const [name2, days2] = eventDisplayData(2);

  const handleClick = (index) => {
    Cookies.set('toset', index, { expires: 365, path: '/' });
  };

  return (
    <div className="existing-event-page">
      <div className="div">
        <div className="overlap">
          <p className="RRR-WEEK-days">
            <span className="text-wrapper">
              {name0}
              <br />
            </span>
            <span className="span">{days0} Days left</span>
          </p>
        </div>
        <div className="overlap-group">
          <p className="miami-trip-days">
            <span className="text-wrapper">
              {name1}
              <br />
            </span>
            <span className="span">{days1} Days left</span>
          </p>
        </div>
        <div className="annie-s-wrapper">
          <p className="annie-s">
            <span className="text-wrapper">
              {name2}
              <br />
            </span>
            <span className="span">{days2} Days left</span>
          </p>
        </div>
        <div className="overlap-2">
          <Link className="text-wrapper-3" to="../addedit">Add New Event</Link>
        </div>
        <div className="overlap-3">
          <Link className="text-wrapper-4" onClick={ () => handleClick(0) } to="../event">View Event 1</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="overlap-4">
          <Link className="text-wrapper-4" onClick={ () => handleClick(1) } to="../event">View Event 2</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="overlap-5">
          <Link className="text-wrapper-4" onClick={ () => handleClick(2) } to="../event">View Event 3</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
      </div>
    </div>
  );
};
