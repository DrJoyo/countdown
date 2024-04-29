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
  }
  const eventCount = existingEvents.length;

  function eventDisplayData(index) {
    if (index < eventCount) {
      const currentDate = new Date();
      const currMS = currentDate.getTime();

      const eventArray = existingEvents[index];
      const eventDate = new Date(eventArray[1], eventArray[2] - 1, eventArray[3])
      const eventMS = eventDate.getTime();
      const daysUntil = Math.ceil((eventMS - currMS)/(1000 * 60 * 60 * 24))
      const eventName = eventArray[0];
      return [ eventName, daysUntil ];
    } else {
      return [ "N/A" , 0 ];
    }
  }

  const handleViewClick = (index) => {
    if (index < eventCount) {
      Cookies.set('toset', index, { expires: 365, path: '/' });
    } else {
      Cookies.set('toset', -1, { expires: 365, path: '/' });
    }
    
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (currentIndex < eventCount - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [name0, days0] = eventDisplayData(currentIndex);
  const [name1, days1] = eventDisplayData(currentIndex + 1);
  const [name2, days2] = eventDisplayData(currentIndex + 2);

  return (
    <div className="existing-event-page">
      <div className="div">
        <div className="box-1">
          <p className="in-box-1">
            <span className="text-wrapper">
              {name0}
              <br />
            </span>
            <span className="span">{days0} Days left</span>
          </p>
        </div>
        <div className="box-2">
          <p className="in-box-2">
            <span className="text-wrapper">
              {name1}
              <br />
            </span>
            <span className="span">{days1} Days left</span>
          </p>
        </div>
        <div className="box-3">
          <p className="in-box-3">
            <span className="text-wrapper">
              {name2}
              <br />
            </span>
            <span className="span">{days2} Days left</span>
          </p>
        </div>
        <div className="overlap-2">
          <Link className="text-wrapper-3" onClick={ () => handleViewClick(-1) } to="../addedit">Add New Event</Link>
        </div>
        <div className="overlap-3">
          {currentIndex < eventCount ? <Link className="text-wrapper-4" onClick={ () => handleViewClick(currentIndex) } to="../event">View Event</Link> : <div className="text-wrapper-4">View Event</div>}
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="overlap-4">
          {currentIndex + 1 < eventCount ? <Link className="text-wrapper-4" onClick={ () => handleViewClick(currentIndex + 1) } to="../event">View Event</Link> : <div className="text-wrapper-4">View Event</div>}
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="overlap-5">
          {currentIndex + 2 < eventCount ? <Link className="text-wrapper-4" onClick={ () => handleViewClick(currentIndex + 2) } to="../event">View Event</Link> : <div className="text-wrapper-4">View Event</div>}
          <img className="line" alt="Line" src="https://c.animaapp.com/y9T6rErS/img/line-4.svg" />
        </div>
        <div className="button-container">
          <div className="prev-button" onClick={() => handlePrevClick()}>
            Prev
          </div>
          <div className="next-button" onClick={() => handleNextClick()}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
};
