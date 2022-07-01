import { useState } from "react";
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>{" "}
    </div>
  );
}
// it's home application of our project
// hydration : run react.js in the frontend
