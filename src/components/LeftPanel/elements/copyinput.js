import React from "react";
import "../../../css/leftpanel.css";
const CopyInput = ({ CopyValue }) => {
  const copyBtn = () => {
    var copyText = document.getElementById("copyinpt");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };
  return (
    <div className="group-input">
      <input
        id="copyinpt"
        type="text"
        value={CopyValue}
        onChange={() => {}}
        className="input-copy"
        placeholder="Payment To"
      />
      <button className="input-btn" onClick={copyBtn}>
        <b>COPY</b>
      </button>
    </div>
  );
};
export default CopyInput;
