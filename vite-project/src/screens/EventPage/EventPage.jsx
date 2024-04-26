import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const EventPage = () => {
  return (
    <div className="event-page">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Annie’s 21st Birthday</div>
          <div className="rectangle" />
          <div className="text-wrapper">Annie’s 21st Birthday</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">2025</div>
          <div className="text-wrapper-2">2025</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-3">2024</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">12</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-4">12</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-5">26</div>
          <div className="rectangle-2" />
          <div className="text-wrapper-5">26</div>
        </div>
        <div className="text-wrapper-6">Notes</div>
        <div className="overlap-4">
          <div className="text-wrapper-7">year</div>
          <div className="text-wrapper-7">year</div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-8">month</div>
          <div className="text-wrapper-8">month</div>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-9">day</div>
          <div className="text-wrapper-9">day</div>
        </div>
        <div className="overlap-7">
          <div className="rectangle-3" />
          <div className="text-wrapper-10">Annie’s 21st Birthday</div>
          <div className="rectangle-4" />
          <p className="need-to-book">
            need to book restaurant
            <br />
            for dinner in advance!
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
