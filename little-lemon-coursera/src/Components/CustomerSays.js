import React from 'react';

function CustomersSay() {
    const testimonials = [
        { name: "John Doe", image: "/path/to/image.jpg", text: "Amazing food!", rating: 5 },
        { name: "Jane Smith", image: "/path/to/image.jpg", text: "Great experience!", rating: 4 },
        // Add more testimonials
    ];

    return (
        <section className="customers-say">
            <h2>What Our Customers Say</h2>
            <div>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <p>{testimonial.text}</p>
                        <p>Rating: {testimonial.rating} stars</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CustomersSay;
