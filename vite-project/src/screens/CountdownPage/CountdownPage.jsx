import React from "react";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const CountdownPage = () => {
  const existingEventsString = Cookies.get('events');
  const existingEvents = existingEventsString ? JSON.parse(existingEventsString) : [];
  const toSetString = Cookies.get('toset')
  const toSet = toSetString ? parseInt(toSetString, 10) : -1;

  const currentDate = new Date();
  const currMS = currentDate.getTime();

  const eventArray = existingEvents[toSet];
  const eventDate = new Date(eventArray[1], eventArray[2] - 1, eventArray[3])
  const eventMS = eventDate.getTime();
  const initialDiff = Math.floor((eventMS - currMS) / 1000);

  const [diff, setDiff] = useState(initialDiff);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDiff(prevDiff => prevDiff - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(diff/(3600 * 24));
  const hours = Math.floor((diff % (3600 * 24)) / (3600));
  const minutes = Math.floor((diff % (3600)) / (60));
  const seconds = diff % 60;
  

  const eventName = eventArray[0];
  return (
    <div className="countdown-page">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper">{diff > 0 ? Math.floor(days/10) : 0}</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-2">{diff > 0 ? days % 10 : 0}</div>
          <div className="text-wrapper-3">days</div>
        </div>
        <div className="text-wrapper-4">:</div>
        <div className="overlap-group">
          <div className="text-wrapper-5">hours</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-6">{diff > 0 ? Math.floor(hours/10) : 0}</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-7">{diff > 0 ? hours % 10 : 0}</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-8">minutes</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-9">{diff > 0 ? Math.floor(minutes / 10) : 0}</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-10">{diff > 0 ? minutes % 10 : 0}</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-11">seconds</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper">{diff > 0 ? Math.floor(seconds / 10) : 0}</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-12">{diff > 0 ? seconds % 10 : 0}</div>
        </div>
        <div className="text-wrapper-13">:</div>
        <div className="text-wrapper-14">:</div>
        <div className="overlap-group-2">
          <Link className="text-wrapper-15" to="../event">Back</Link>
          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/QdPWsud8/img/arrow-2.svg" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-16">{eventName}</div>
        </div>
      </div>
    </div>
  );
};
