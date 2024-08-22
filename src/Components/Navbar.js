import React from 'react';

function Navbar({ isLoggedIn, onLoginClick, onSignupClick, onLogoutClick }) {
  return (
    <div>
      <ul className="navlist">
        <li><a href="#" style={{ color: "red" }}>Home</a></li>
        <li><a href="#" style={{ color: "red" }}>About</a></li>
        <li><a href="#" style={{ color: "red" }}>Contact</a></li>
        {!isLoggedIn ? (
          <>
            <li><button onClick={onLoginClick} style={{ color: "red" }}>Login</button></li>
            <li><button onClick={onSignupClick} style={{ color: "red" }}>Signup</button></li>
          </>
        ) : (
          <li><button onClick={onLogoutClick} style={{ color: "red" }}>Logout</button></li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
