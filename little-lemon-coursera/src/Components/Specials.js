import React from 'react';

function Specials() {
    const specials = [
        { name: "Special Dish 1", description: "Delicious dish 1" },
        { name: "Special Dish 2", description: "Delicious dish 2" },
        // Add more specials
    ];

    return (
        <section className="specials">
            <h2>Today's Specials</h2>
            <ul>
                {specials.map((special, index) => (
                    <li key={index}>
                        <h3>{special.name}</h3>
                        <p>{special.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Specials;
