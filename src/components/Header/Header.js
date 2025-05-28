import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="header-icons">
        <span className="notification-icon">🔔</span>
        <div className="user-profile">
          <img src="/assets/user-avatar.png" alt="User" />
          <span>Dr. Smith</span>
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
}

export default Header;