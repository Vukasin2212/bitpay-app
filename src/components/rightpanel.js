import React from "react";
import "../css/rightpanel.css";
import BitPayLogo from "../images/bitpay-logo.png";
const RightPanel = () => {
  return (
    <div className="col-md-5 panel-two">
      <p className="hdr-txt">
        <b>Easy, fast and secure payments</b>
      </p>
      <p className="t-txt">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <p className="t-txt-two">Powered By</p>
      <img src={BitPayLogo} alt="noPhoto" />
    </div>
  );
};
export default RightPanel;
