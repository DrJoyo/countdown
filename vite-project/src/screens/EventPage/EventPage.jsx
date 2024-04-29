import React from "react";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const EventPage = () => {
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

  return (
    <div className="event-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">{eventArray[0]}</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-3">{eventArray[1]}</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">{eventArray[2]}</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-5">{eventArray[3]}</div>
        </div>
        <div className="text-wrapper-6">Notes</div>
        <div className="overlap-4">
          <div className="text-wrapper-7">year</div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-8">month</div>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-9">day</div>
        </div>
        <div className="overlap-7">
          <div className="rectangle-4" />
          <p className="need-to-book">
            {eventArray[4]}
          </p>
        </div>
        <div className="overlap-group-2">
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-11">{diff > 0 ? Math.floor(days / 10) : 0}</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-12">{diff > 0 ? days % 10 : 0}</div>
          <div className="text-wrapper-13">days</div>
        </div>
        <div className="text-wrapper-14">:</div>
        <div className="overlap-8">
          <div className="text-wrapper-15">hours</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-16">{diff > 0 ? Math.floor(hours / 10) : 0}</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-17">{diff > 0 ? hours % 10 : 0}</div>
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-18">minutes</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-19">{diff > 0 ? Math.floor(minutes / 10) : 0}</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-20">{diff > 0 ? minutes % 10 : 0}</div>
        </div>
        <div className="overlap-10">
          <div className="text-wrapper-21">seconds</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-11">{diff > 0 ? Math.floor(seconds / 10) : 0}</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-22">{diff > 0 ? seconds % 10 : 0}</div>
        </div>
        <div className="text-wrapper-23">:</div>
        <div className="text-wrapper-24">:</div>
        <div className="overlap-11">
          <Link className="text-wrapper-27" to="../countdown">View CountDown Page</Link>
        </div>
        <div className="overlap-12">
          <Link className="text-wrapper-28" to="../existing">Back</Link>
          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/ItKrNUpb/img/arrow-1.svg" />
        </div>
        <div className="overlap-13">
          <img className="rectangle-7" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-32-1.svg" />
          <Link className="text-wrapper-29" to="../addedit">Edit Event</Link>
        </div>
      </div>
    </div>
  );
};
