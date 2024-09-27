// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
  const sidebarStyle = {
    backgroundColor: '#343a40', // Dark gray background matching the navbar
    padding: '20px',
    width: '200px',
    height: '100vh', // Full viewport height
    color: '#fff', // White text color
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)' // Subtle shadow
  };

  const sectionStyle = {
    marginBottom: '20px', // Space between sections
    padding: '10px',
    backgroundColor: '#495057', // Darker gray for sections
    borderRadius: '5px'
  };

  const ulStyle = {
    listStyleType: 'none', // Remove bullet points
    padding: '0',
    margin: '0'
  };

  const liStyle = {
    marginBottom: '10px' // Space between list items
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '#fff', // White color for links
    fontSize: '1.2rem',
    fontWeight: 'bold'
  };

  const linkHoverStyle = {
    color: '#adb5bd' // Light gray color on hover
  };

  return (
    <nav style={sidebarStyle} className="Sidebar">
      <div style={sectionStyle}>
        <h3>Expenses</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="#expenses-overview" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Overview</a>
          </li>
          <li style={liStyle}>
            <a href="#expenses-reports" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Reports</a>
          </li>
        </ul>
      </div>
      <div style={sectionStyle}>
        <h3>Habits</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="#habits-tracker" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Tracker</a>
          </li>
          <li style={liStyle}>
            <a href="#habits-stats" style={linkStyle} onMouseOver={(e) => e.target.style.color = linkHoverStyle.color} onMouseOut={(e) => e.target.style.color = linkStyle.color}>Stats</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
