import React from 'react';

function BookingPage() {
    return (
        <section className="booking-page">
            <h2>Book a Table</h2>
            <form>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" />
                <label htmlFor="guests">Number of Guests:</label>
                <input type="number" id="guests" name="guests" min="1" />
                <button type="submit">Reserve</button>
            </form>
        </section>
    );
}

export default BookingPage;
