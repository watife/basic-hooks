import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(prevCount => prevCount + 1);
  };

  return <button onClick={incr}>I was clicked {count}</button>;
};

export default App;
