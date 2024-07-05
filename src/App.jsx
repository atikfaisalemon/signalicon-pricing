import { useState } from "react";
import Price from "./components/Price";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Price />
    </div>
  );
}

export default App;
