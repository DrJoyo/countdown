import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const AddEditPage = () => {
  return (
    <div className="add-edit-event">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Annie’s 21st Birthday</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-3">2024</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-4">Event</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-4">Date</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-5">12</div>
        </div>
        <div className="overlap-group-2">
          <div className="text-wrapper-6">26</div>
        </div>
        <div className="text-wrapper-7">Notes</div>
        <div className="overlap-5">
          <div className="text-wrapper-4">year</div>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-4">month</div>
        </div>
        <div className="overlap-7">
          <div className="text-wrapper-4">day</div>
        </div>
        <div className="overlap-8">
          <Link className="text-wrapper-9" to="../existing">Save Event</Link>
        </div>
        <div className="overlap-9">
          <div className="rectangle-3" />
          <p className="need-to-book">
            need to book restaurant
            <br />
            for dinner in advance!
          </p>
        </div>
        <div className="overlap-10">
          <Link className="text-wrapper-10" to="../existing">View My Existing Events</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/9MICJ0TB/img/line-1.svg" />
        </div>
      </div>
    </div>
  );
};
