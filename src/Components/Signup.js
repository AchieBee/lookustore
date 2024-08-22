import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Dummy signup success check
      if (email && password) {
        onSignup();
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
      } else {
        setError('Signup failed. Please try again.');
      }
    } else {
      setError('Passwords do not match.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          className="form-control" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input 
          type="password" 
          className="form-control" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input 
          type="password" 
          className="form-control" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="btn btn-primary">Signup</button>
    </form>
  );
}

export default Signup;
