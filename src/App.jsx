import "./App.css";
import { useCallback, useState } from "react";

const App = () => {
  const [openCount, setOpenCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);

  const [errorCount, setErrorCount] = useState(0);

  const handleClick = useCallback(() => {
    setOpenCount((value) => value + 1);

    fetch("/api/test")
      .then(() => setSuccessCount((value) => value + 1))
      .catch((error) => setErrorCount((value) => value + 1))
      .then(() => setOpenCount((value) => value - 1));
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={handleClick}>Click here to send a new request</button>
      <p>Open Requests: {openCount}</p>
      <p>Successful Requests: {successCount}</p>
      <p>Failed Requests: {errorCount}</p>
    </div>
  );
};

export default App;
