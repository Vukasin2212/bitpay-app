import React, { Fragment } from "react";
import RefreshPanel from "../elements/refreshpanel";
import { MdRefresh } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const StepFour = () => {
  const selectedCC = useSelector(state => state.bitpayReducer.cryptoCurrency);
  const transactionID = selectedCC ? selectedCC.transactionID : "Not found";
  const history = useHistory();
  const SetURL = () => {
    history.push("/stepfive");
  };
  return (
    <Fragment>
      <RefreshPanel transactionID={transactionID} />
      <button
        className="ref-btn"
        onClick={SetURL}
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
      >
        <b>
          <MdRefresh
            style={{ width: "23px", height: "23px", marginRight: "5px" }}
          />
          REFRESH
        </b>
      </button>
    </Fragment>
  );
};
export default StepFour;
