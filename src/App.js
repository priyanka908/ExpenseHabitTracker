import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ExpenseTracker from './pages/ExpenseTracker'; 
import HabitTracker from './pages/HabitTracker'; 

function App() {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habit" element={<HabitTracker />} />
            <Route path="/expense" element={<ExpenseTracker />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px 0' }}>
        <p>&copy; 2024 Habit and Expense Tracker</p>
      </footer>
    </Router>
  );
}

export default App;
