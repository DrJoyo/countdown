import React from "react";
import { useState, createContext, useContext } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const OpeningPage = () => {
  const handleClick = (index) => {
    Cookies.set('toset', index, { expires: 365, path: '/' });
  };
  return (
    <div className="opening-page">
      <div className="div">
        <img className="count-down" alt="Count down" src="https://c.animaapp.com/FKxUQPX7/img/countdown-.png" />
        <img
          className="easily-track-and"
          alt="Easily track and"
          src="https://c.animaapp.com/FKxUQPX7/img/easily-track-and-manage-special-event-dates-seamlessly-.png"
        />
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper">0</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper-2">7</div>
          <div className="text-wrapper-3">months</div>
        </div>
        <div className="text-wrapper-4">:</div>
        <div className="overlap-group">
          <div className="text-wrapper-5">days</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper-6">1</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper-7">5</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-8">minutes</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper-9">2</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper-10">3</div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-11">seconds</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper">4</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-10.png" />
          <div className="text-wrapper-12">6</div>
        </div>
        <div className="text-wrapper-13">:</div>
        <div className="text-wrapper-14">:</div>
        <div className="overlap-3">
          <img className="rectangle-2" alt="Rectangle" src="https://c.animaapp.com/FKxUQPX7/img/rectangle-11.svg" />
          <Link className="text-wrapper-15"onClick={handleClick(-1)} to="addedit">Add My Event</Link>
        </div>
      </div>
    </div>
  );
};
