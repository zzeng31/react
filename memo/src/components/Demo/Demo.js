import React from "react";
import MyParagraph from "./MyParagraph";
const Demo = ({ show }) => {
  console.log("DEMO running");
  return (
    <div>
      {show ? "This is new!" : ""}
      <MyParagraph show={false} />
    </div>
  );
};

export default React.memo(Demo);
