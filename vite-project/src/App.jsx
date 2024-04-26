import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AddEditPage } from './screens/AddEditPage'
import { CountdownPage } from './screens/CountdownPage'
import { EventPage } from './screens/EventPage'
import { ExistingEventPage } from './screens/ExistingEventPage'
import { OpeningPage } from './screens/OpeningPage'
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<OpeningPage />} />
          <Route path="addedit" element={<AddEditPage />} />
          <Route path="countdown" element={<CountdownPage />} />
          <Route path="event" element={<EventPage />} />
          <Route path="existing" element={<ExistingEventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App