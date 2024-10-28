// Greeting.js (React Component)
import React, { useState } from 'react';

export function Greeting() {
  const [greeting, setGreeting] = useState("Hello, World!");

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={() => setGreeting("Hello, React!")}>Change Greeting</button>
    </div>
  );
}
