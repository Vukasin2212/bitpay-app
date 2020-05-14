import React from "react";
import { MdDone } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCC, setPromo } from "../../../store/actions/bitpayActions";
const StepFive = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const SetURL = () => {
    history.push("/");
    dispatch(setCC(null));
    dispatch(setPromo(null));
  };
  return (
    <div className="success-panel">
      <p
        style={{
          textAlign: "center"
        }}
      >
        <b>
          <MdDone className="ref-icon" />
        </b>
      </p>
      <h2 className="ref-title">
        <b>Payment successful</b>
      </h2>

      <p className="txt-bottom-h" style={{ textAlign: "center" }}>
        Nullam placerat erat volutpat mollis congue. Nunc felis <b />
        libero, interdu eu purus eget, posuere porttitor nisi. <br />
        Suspendisse potenti. Etiam ut lectus augue.
      </p>
      <button className="ref-btn" onClick={SetURL}>
        <b>HOME</b>
      </button>
    </div>
  );
};
export default StepFive;
