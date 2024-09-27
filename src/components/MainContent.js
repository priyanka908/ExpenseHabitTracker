import { useState } from 'react';

function MainContent() {
  const [expenses, setExpenses] = useState([]);
  const [habits, setHabits] = useState([]);
  const [expenseInput, setExpenseInput] = useState('');
  const [habitInput, setHabitInput] = useState('');

  const handleExpenseChange = (e) => {
    setExpenseInput(e.target.value);
  };

  const handleHabitChange = (e) => {
    setHabitInput(e.target.value);
  };

  const addExpense = () => {
    if (expenseInput) {
      setExpenses([...expenses, expenseInput]);
      setExpenseInput('');
    }
  };

  const addHabit = () => {
    if (habitInput) {
      setHabits([...habits, habitInput]);
      setHabitInput('');
    }
  };

  return (
    <main className="MainContent">
      <section>
        <h2>Expenses</h2>
        <input
          type="text"
          value={expenseInput}
          onChange={handleExpenseChange}
          placeholder="Add an expense"
        />
        <button onClick={addExpense}>Add Expense</button>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Habits</h2>
        <input
          type="text"
          value={habitInput}
          onChange={handleHabitChange}
          placeholder="Add a habit"
        />
        <button onClick={addHabit}>Add Habit</button>
        <ul>
          {habits.map((habit, index) => (
            <li key={index}>{habit}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default MainContent;
