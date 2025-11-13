import logo from './logo.svg';
import './App.css';

import React from "react";

const Counter = React.memo(function Counter({ count }) {
  console.log("Counter render");
  return <div>Count: {count}</div>;
});

export default function App() {
  const [count, setCount] = React.useState(0);
  const [label, setLabel] = React.useState("A");

  return (
    <div>
      <Counter count={count} />
      <button onClick={() => setLabel("B")}>Change label</button>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
    </div>
  );
}