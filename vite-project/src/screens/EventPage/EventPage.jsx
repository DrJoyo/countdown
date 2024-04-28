import React from "react";
import { useState, createContext, useContext } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const EventPage = () => {
  const existingEventsString = Cookies.get('events');
  const existingEvents = existingEventsString ? JSON.parse(existingEventsString) : [];
  const toSetString = Cookies.get('toset')
  const toSet = toSetString ? parseInt(toSetString, 10) : -1;
  let eventArray = ['Enter Name', 2024, 1, 1, 'Enter Notes'];
  console.log(toSet);
  if (toSet >= 0) {
    eventArray = existingEvents[toSet];
  }
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
          <div className="text-wrapper-11">0</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-12">7</div>
          <div className="text-wrapper-13">months</div>
        </div>
        <div className="text-wrapper-14">:</div>
        <div className="overlap-8">
          <div className="text-wrapper-15">days</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-16">1</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-17">5</div>
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-18">minutes</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-19">2</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-20">3</div>
        </div>
        <div className="overlap-10">
          <div className="text-wrapper-21">seconds</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-11">4</div>
          <img className="rectangle-5" alt="Rectangle" src="https://c.animaapp.com/ItKrNUpb/img/rectangle-19.png" />
          <div className="text-wrapper-22">6</div>
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
