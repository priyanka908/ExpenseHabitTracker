import React from 'react';
import './Header.css'; // Ensure this path is correct

function Header() {
  return (
    <header>
      <h1>Habit and Expense Tracker</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/Habit">Habit Tracker</a></li>
          <li><a href="/expense">Expense Tracker</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
