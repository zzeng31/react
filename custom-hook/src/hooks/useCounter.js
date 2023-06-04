import { useState, useEffect } from "react";
const useCounter = (type) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (type === "forward") {
        setCounter((prevCounter) => prevCounter + 1);
      }
      if (type === "backward") {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return {
    counter,
  };
};
export { useCounter };
