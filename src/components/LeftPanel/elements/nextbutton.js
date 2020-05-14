import React from "react";
import "../../../css/leftpanel.css";
const NextStep = ({ SetURL }) => {
  return (
    <button className="step-btn" onClick={SetURL}>
      <b>NEXT</b>
    </button>
  );
};
export default NextStep;
