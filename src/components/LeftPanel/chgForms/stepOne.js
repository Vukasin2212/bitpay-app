import React, { Fragment } from "react";
import SelectedOne from "../elements/selectedOne";
import NextStep from "../elements/nextbutton";
import Total from "../elements/total";
import Lists from "../elements/selectelement";
import { BsFillCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setCC } from "../../../store/actions/bitpayActions";
import { FaBitcoin, FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const StepOne = ({ data }) => {
  const selectedCC = useSelector(state => state.bitpayReducer.cryptoCurrency);
  const dispatch = useDispatch();
  //const [selectID, setID] = useState("");
  const icon = <FaBitcoin className="icon-first" />;
  const text = "Crypto currency";
  const api = [
    {
      _id: 1,
      name: "ETH",
      amount: 0.0123,
      transactionID: "1b34c127421hljha9sfsdfhl21l347as87d6sf79g"
    },
    {
      _id: 2,
      name: "BTC",
      amount: 0.00241,
      transactionID: "11dfc127421hljhaasdfdfhl21l347as87d6sf79g"
    }
  ];
  const history = useHistory();
  const SetURL = () => {
    history.push("/steptwo");
  };
  const ChangeURL = () => {
    dispatch(setCC(null));
  };
  const selName = selectedCC ? selectedCC.name : "";
  return (
    <Fragment>
      <SelectedOne icon={icon} text={text} ChangeURL={ChangeURL} />{" "}
      <h5 className="header-el" style={{ marginTop: "60px" }}>
        <b>Select your crypto currency</b>
      </h5>
      {api.map((ds, i) => {
        const ic =
          selName === ds.name ? (
            <FaCheckCircle
              className="icon-other"
              style={{ color: "rgb(65, 125, 265)" }}
            />
          ) : (
            <BsFillCircleFill
              className="icon-other"
              onClick={() => {
                dispatch(setCC(ds));
                //  setID(ds._id);
                //  alert(ds._id);
              }}
            />
          );
        return <Lists key={i} text={ds.name} icon={ic} />;
      })}
      <h5 className="header-el">
        <b>Total</b>
      </h5>
      <Total selectedCC={selectedCC} />
      <NextStep SetURL={SetURL} />
    </Fragment>
  );
};
export default StepOne;
