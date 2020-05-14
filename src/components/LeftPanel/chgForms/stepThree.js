import React, { Fragment } from "react";
import SelectedOne from "../elements/selectedOne";
import NextStep from "../elements/nextbutton";
import CopyInput from "../elements/copyinput";
import Total from "../elements/total";
import { FaBitcoin, FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPromo, setCC } from "../../../store/actions/bitpayActions";
const StepThree = ({ data }) => {
  const selectedCC = useSelector(state => state.bitpayReducer.cryptoCurrency);
  const selectedPromo = useSelector(state => state.bitpayReducer.promo);
  const iconBit = <FaBitcoin className="icon-first" />;
  const textBit = "Crypto currency";
  const iconSelICON = <FaCheckCircle className="icon-first" />;
  const textICON = selectedCC ? selectedCC.name : "";
  const textTwoICON = selectedPromo ? selectedPromo.name : "";
  const history = useHistory();
  const dispatch = useDispatch();
  const ChangeURL = () => {
    history.push("/");
  };

  const ChangeURLTwo = () => {
    history.push("/steptwo");
  };
  const ChangeAll = () => {
    history.push("/");
    dispatch(setPromo(null));
    dispatch(setCC(null));
  };
  const SetURL = () => {
    if (selectedCC === null || selectedPromo === null) {
      alert(
        "you have not selected a promotion or currency, your transaction cannot be processed!"
      );
    } else {
      history.push("/stepfour");
    }
  };

  const generateS4 = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

  const idPayment =
    generateS4() +
    generateS4() +
    "-" +
    generateS4() +
    "-" +
    generateS4() +
    "-" +
    generateS4() +
    "-" +
    generateS4() +
    generateS4() +
    generateS4();
  return (
    <Fragment>
      <SelectedOne icon={iconBit} text={textBit} ChangeURL={ChangeAll} />
      <SelectedOne icon={iconSelICON} text={textICON} ChangeURL={ChangeURL} />
      <SelectedOne
        icon={iconSelICON}
        text={textTwoICON}
        ChangeURL={ChangeURLTwo}
      />
      <h5 className="header-el">
        <b>Total</b>
      </h5>
      <Total selectedCC={selectedCC} />
      <h5 className="header-el" style={{ marginTop: "60px" }}>
        <b>Send your payment to</b>
      </h5>
      <CopyInput CopyValue={idPayment} />
      <NextStep SetURL={SetURL} />
    </Fragment>
  );
};
export default StepThree;
