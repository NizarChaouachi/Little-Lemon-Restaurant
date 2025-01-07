import React, { useState } from 'react';
import { fetchAPI } from './ApiFetch';
const BookingForm = ({ availableTimes, dispatch,submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate }); // Dispatch the selected date
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        required 
      />

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required
      >
        <option value="" disabled>Select a time</option>
        {availableTimes?.map((timeOption, index) => (
          <option key={index} value={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        min="1" 
        max="10" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
      />

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)} 
        required
      >
        <option value="" disabled>Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type="submit" 
        value="Make Your Reservation" 
      />
    </form>
  );
};

export default BookingForm;
