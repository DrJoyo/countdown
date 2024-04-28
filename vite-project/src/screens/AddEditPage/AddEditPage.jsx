import React from "react";
import { useState, createContext, useContext } from "react";
import Cookies from 'js-cookie'
import "./style.css";
import { Link } from "react-router-dom";

export const AddEditPage = () => {
  const existingEventsString = Cookies.get('events');
  const existingEvents = existingEventsString ? JSON.parse(existingEventsString) : [];
  const toSetString = Cookies.get('toset')
  const toSet = toSetString ? parseInt(toSetString, 10) : -1;

  let eventArray = ['Enter Name', 2024, 1, 1, 'Enter Notes'];
  console.log(toSet);
  if (toSet >= 0) {
    eventArray = existingEvents[toSet];
  }

  const saveEvent = () => {
    console.log("SaveEvent function called")
    const editableElements = document.querySelectorAll('[contentEditable=true]');
    const contentList = []

    editableElements.forEach(element => {
      const content = element.textContent.trim();
      console.log(content)
      contentList.push(content);
    });
    if (toSet == -1) {
      existingEvents.push(contentList);
    } else {
      existingEvents[toSet] = contentList;
    }
    const contentString = JSON.stringify(existingEvents)
    console.log(contentString)
    Cookies.set('events', contentString, { expires: 365, path: '/' });
  };
  console.log('tst')
  return (
    <div className="add-edit-event">
      <div className="div">
        <div className="overlap">
          <div contentEditable className="text-wrapper">{eventArray[0]}</div>
        </div>
        <div className="overlap-group">
          <div contentEditable className="text-wrapper-3">{eventArray[1]}</div>
        </div>
        <div className="overlap-4">
          <div contentEditable className="text-wrapper-5">{eventArray[2]}</div>
        </div>
        <div className="overlap-group-2">
          <div contentEditable className="text-wrapper-6">{eventArray[3]}</div>
        </div>
        <div className="overlap-9">
          <div className="rectangle-3" />
          <p contentEditable className="need-to-book">
            {eventArray[4]}
          </p>
        </div>

        <div className="overlap-2">
          <div className="text-wrapper-4">Event</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-4">Date</div>
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
          <Link className="text-wrapper-9" onClick={saveEvent} to="../existing">Save Event</Link>
        </div>
        
        <div className="overlap-10">
          <Link className="text-wrapper-10" to="../existing">View My Existing Events</Link>
          <img className="line" alt="Line" src="https://c.animaapp.com/9MICJ0TB/img/line-1.svg" />
        </div>
      </div>
    </div>
  );
};
