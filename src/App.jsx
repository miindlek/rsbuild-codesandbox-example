import "./App.css";
import { useCallback, useState } from "react";

const App = () => {
  const [openCount, setOpenCount] = useState(0);
  const [closedCount, setClosedCount] = useState(0);

  const handleClick = useCallback(() => {
    setOpenCount((value) => value + 1);

    fetch("/api/test")
      .then(() => setClosedCount((value) => value + 1))
      .catch((error) => setClosedCount((value) => value + 1))
      .then(() => setOpenCount((value) => value - 1));
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={handleClick}>Click here to send a new request</button>
      <p>Open Requests count: {openCount}</p>
      <p>Closed Requests count: {closedCount}</p>
    </div>
  );
};

export default App;
