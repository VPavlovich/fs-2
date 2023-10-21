import React, { useState } from 'react';

function SignInContainer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Send a POST request to your back-end with user credentials
    fetch("http://localhost:4000/sign2", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from your back-end here
        if (data.success) {
          // Successful sign-in
          // You can redirect to a different page or update the UI accordingly
        } else {
          // Failed sign-in
          // Display an error message or handle the error as needed
        }
      })
      .catch(error => {
        // Handle any network errors or other issues here
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInContainer;