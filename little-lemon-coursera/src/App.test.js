import { render, screen } from "@testing-library/react";
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/Main'; 
import { fetchAPI } from "./Components/ApiFetch";

test('Renders the "Choose date" label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByLabelText(/choose date/i); // Using label text to find the element
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial available times', () => {
  const times = initializeTimes();
  expect(times).toEqual([  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same available times when no specific action is provided', () => {
  const currentState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UNKNOWN_ACTION' }; 
  const newState = updateTimes(currentState, action);
  expect(newState).toEqual(currentState); 
});

jest.mock('./Components/ApiFetch', () => ({
  fetchAPI: jest.fn(),
}));

test('initializeTimes returns the available booking times from fetchAPI', () => {
  fetchAPI.mockReturnValue(['17:00', '18:00', '19:00', '20:00']);

  const times = initializeTimes();

  expect(times).toEqual(['17:00', '18:00', '19:00', '20:00']);
});

jest.mock('./Components/ApiFetch', () => ({
  fetchAPI: jest.fn(),
}));

test('updateTimes returns updated available booking times based on the selected date', () => {
  fetchAPI.mockReturnValue(['17:30', '18:30', '19:30']);

  const selectedDate = new Date('2025-01-01');
  const times = updateTimes({}, { type: 'UPDATE_DATE', payload: selectedDate });

  expect(times).toEqual(['17:30', '18:30', '19:30']);
});