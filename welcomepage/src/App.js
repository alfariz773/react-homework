import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    console.log("Welcome message displayed.");
  }, []);

  return (
    <div style={{ textAlign: "center", color: "red"}}>
      <h3>Hello, user! Welcome to our site.</h3>
    </div>
  );
}

export default Welcome;
