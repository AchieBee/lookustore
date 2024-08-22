import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import ShoeList from './Components/ShoeList';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowAuthForm(false);
    alert('Login successful!');
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setShowAuthForm(false);
    alert('Signup successful!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('Logged out successfully.');
  };

  const handlePurchaseClick = (shoe) => {
    if (isLoggedIn) {
      alert(`Purchased ${shoe.name} for $${shoe.price.toFixed(2)}`);
    } else {
      setShowAuthForm(true);
    }
  };

  return (
    <div className="App">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLoginClick={() => { setIsSignup(false); setShowAuthForm(true); }} 
        onSignupClick={() => { setIsSignup(true); setShowAuthForm(true); }} 
        onLogoutClick={handleLogout} 
      />
      <main>
        {showAuthForm ? (
          isSignup ? <Signup onSignup={handleSignup} /> : <Login onLogin={handleLogin} />
        ) : (
          <>
            <HomePage />
            <ShoeList onPurchaseClick={handlePurchaseClick} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
