import React from "react";
const Total = ({ selectedCC }) => {
  return (
    <div className="element-no-mrg">
      <div className="row">
        <p className="cripto-name">
          <b>{selectedCC ? selectedCC.name : null}</b>
        </p>
        <p className="crypto-val">
          <b>{selectedCC ? selectedCC.amount : "Not Found"}</b>
        </p>
      </div>
    </div>
  );
};
export default Total;
