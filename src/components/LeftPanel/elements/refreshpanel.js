import React from "react";
import { MdRefresh } from "react-icons/md";
const RefreshPanel = ({ transactionID }) => {
  return (
    <div className="ref-panel">
      <p
        style={{
          textAlign: "center"
        }}
      >
        <b>
          <MdRefresh className="ref-icon" />
        </b>
      </p>
      <h2 className="ref-title">
        <b>Transaction pending</b>
      </h2>
      <p className="txt-bottom-h" style={{ textAlign: "center" }}>
        Transaction ID <br />
        <span
          className="txt-bottom-h"
          style={{
            textAlign: "center",
            color: "rgb(65, 125, 265)"
          }}
        >
          {transactionID}
        </span>
      </p>
      <p className="txt-bottom-h" style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod...
      </p>
    </div>
  );
};
export default RefreshPanel;
