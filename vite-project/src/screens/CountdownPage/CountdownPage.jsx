import React from "react";
import { useState, createContext, useContext } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const CountdownPage = () => {
  return (
    <div className="countdown-page">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper">0</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-2">7</div>
          <div className="text-wrapper-3">months</div>
        </div>
        <div className="text-wrapper-4">:</div>
        <div className="overlap-group">
          <div className="text-wrapper-5">days</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-6">1</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-7">5</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-8">minutes</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-9">2</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-10">3</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-11">seconds</div>
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper">4</div>
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/QdPWsud8/img/rectangle-19.png" />
          <div className="text-wrapper-12">6</div>
        </div>
        <div className="text-wrapper-13">:</div>
        <div className="text-wrapper-14">:</div>
        <div className="overlap-group-2">
          <Link className="text-wrapper-15" to="../event">Back</Link>
          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/QdPWsud8/img/arrow-2.svg" />
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-16">Annie’s 21st Birthday</div>
        </div>
      </div>
    </div>
  );
};
