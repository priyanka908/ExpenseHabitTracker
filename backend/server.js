const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware - updated CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // React frontend port
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200, // Legacy browsers sometimes choke on 204
};

app.use(cors(corsOptions)); // Allow requests from React app's port
app.use(express.json()); // To parse JSON bodies

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Expense and habit tracker routes
let expenses = [];
let habits = [
  // Example habit data
  { habit: 'Exercise', description: 'Daily workout' },
];

// Get all expenses
app.get('/api/expenses', (req, res) => {
  res.json(expenses);
});

// Add an expense
app.post('/api/expenses', (req, res) => {
  const newExpense = req.body;
  expenses.push(newExpense);
  res.json(newExpense);
});

// Get all habits
app.get('/api/habits', (req, res) => {
  res.json(habits);
});

// Add a habit
app.post('/api/habits', (req, res) => {
  const newHabit = req.body;
  habits.push(newHabit);
  res.status(201).json(newHabit);
});

// User registration and login
let users = []; // In-memory user storage (for demo purposes only)

// User registration route
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Add new user
  const newUser = { username, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

// User login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Check if user exists and password matches
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
