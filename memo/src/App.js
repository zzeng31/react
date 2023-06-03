import React, { useState, useMomo, useContext, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demo from "./components/Demo/Demo";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP RUNNING");
  const toggleParagraphHandler = useCallback(() => {
    // allowToggle will always be the old value, because of js function create its closure when its created. That's why we need the dependency array
    if (allowToggle) setShowParagraph((prevState) => !prevState);
  }, [allowToggle]);
  const allowToggleHandler = useCallback(() => {
    setAllowToggle((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={allowToggleHandler}>
        {`${allowToggle ? "Disable Toggle" : "Allow Toggle"}`}
      </Button>
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
