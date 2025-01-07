import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI,submitAPI } from './ApiFetch';
import { useNavigate } from 'react-router-dom';
const initializeTimes = () => {
  const today = new Date(); 
  return fetchAPI(today);  
};


const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed'); // Navigate to the confirmation page
    }
  };
  return (
    <div className="booking-page">
      <h1>Reserve Your Table</h1>
      <p>Enjoy a wonderful dining experience at Little Lemon.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;
