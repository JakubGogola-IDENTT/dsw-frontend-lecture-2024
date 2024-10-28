import React from 'react';

export function Greeting(props) {
  const currentTime = new Date().toLocaleTimeString(); // Get current time

  return (
    <div>
      <h1>Hello, {props.name}!</h1>   {/* Dynamic name display */}
      <p>Current time: {currentTime}</p> {/* Dynamic time display */}
    </div>
  );
}
