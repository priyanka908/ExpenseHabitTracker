// src/pages/Home.js
import React from 'react';
import './Home.css'; // Make sure to create and style this CSS file accordingly

function Home() {
  return (
    <div className="home-container">
      <div className="section habit-tracker">
        <img src="https://cdn.pixabay.com/photo/2016/10/19/08/48/rules-1752412_1280.jpg" alt="Habit Tracker" className="section-image" />
        <a href="/habit" className="section-link">Go to Habit Tracker</a>
      </div>
      <div className="section expense-tracker">
        <img src="https://media.istockphoto.com/id/1362156825/vector/hand-separates-five-money-bags-business-concept-illustration.jpg?s=1024x1024&w=is&k=20&c=EOh4HGXWQ-J46VzMtbMGvwAQo4y5jixSZW2YqBqa7dc=" alt="Expense Tracker" className="section-image" />
        <a href="/expense" className="section-link">Go to Expense Tracker</a>
      </div>
    </div>
  );
}

export default Home;
