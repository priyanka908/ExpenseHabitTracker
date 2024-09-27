import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [activity, setActivity] = useState('');
  const [expectedExpense, setExpectedExpense] = useState('');
  const [spentExpense, setSpentExpense] = useState('');
  const [aimToSave, setAimToSave] = useState('');
  const [ableToSave, setAbleToSave] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpense = {
      activity,
      expectedExpense,
      spentExpense,
      aimToSave,
      ableToSave,
    };

    console.log('Submitting expense:', newExpense); // Log the expense data

    try {
      // Send data to backend
      const response = await axios.post('/api/expenses', newExpense);
      console.log('Response from backend:', response.data); // Log the response

      // Update local state
      setExpenses([...expenses, response.data]);

      // Clear the input fields
      setActivity('');
      setExpectedExpense('');
      setSpentExpense('');
      setAimToSave('');
      setAbleToSave('');
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <div className="form-group">
          <label>Activity:</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="Enter activity"
          />
        </div>
        <div className="form-group">
          <label>Expected Expense:</label>
          <input
            type="number"
            value={expectedExpense}
            onChange={(e) => setExpectedExpense(e.target.value)}
            placeholder="Enter expected expense"
          />
        </div>
        <div className="form-group">
          <label>Spent Expense:</label>
          <input
            type="number"
            value={spentExpense}
            onChange={(e) => setSpentExpense(e.target.value)}
            placeholder="Enter spent expense"
          />
        </div>
        <div className="form-group">
          <label>Aim to Save:</label>
          <input
            type="number"
            value={aimToSave}
            onChange={(e) => setAimToSave(e.target.value)}
            placeholder="Enter amount to save"
          />
        </div>
        <div className="form-group">
          <label>Able to Save:</label>
          <input
            type="number"
            value={ableToSave}
            onChange={(e) => setAbleToSave(e.target.value)}
            placeholder="Enter amount saved"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="expense-list">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <div><strong>Activity:</strong> {expense.activity}</div>
            <div><strong>Expected:</strong> ₹{expense.expectedExpense}</div>
            <div><strong>Spent:</strong> ₹{expense.spentExpense}</div>
            <div><strong>Aim to Save:</strong> ₹{expense.aimToSave}</div>
            <div><strong>Able to Save:</strong> ₹{expense.ableToSave}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseTracker;
