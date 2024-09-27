import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Fetch existing habits when the component mounts
    const fetchHabits = async () => {
      try {
        const response = await axios.get('/api/habits'); // Adjusted URL
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };
    fetchHabits();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHabit = { habit, description };

    try {
      // Send data to backend
      const response = await axios.post('/api/habits', newHabit); // Adjusted URL
      setHabits([...habits, response.data]);
      setHabit('');
      setDescription('');
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  return (
    <div className="habit-tracker">
      <h1>Habit Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Habit:</label>
          <input
            type="text"
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            placeholder="Enter habit"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="habit-list">
        {habits.map((habitItem, index) => (
          <div key={index} className="habit-item">
            <div><strong>Habit:</strong> {habitItem.habit}</div>
            <div><strong>Description:</strong> {habitItem.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitTracker;
