import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCredentials = {
      email,
      password,
    };

    try {
      // Send data to backend
      const response = await axios.post('/api/login', userCredentials); // Adjusted URL to match the server

      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful:', response.data);

      // Example: Save token to local storage (if your backend returns a token)
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }

      // Clear the input fields
      setEmail('');
      setPassword('');

      // Example: Redirect to a dashboard or home page (you may need react-router for this)
      // window.location.href = '/dashboard'; // Replace with your actual route
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
