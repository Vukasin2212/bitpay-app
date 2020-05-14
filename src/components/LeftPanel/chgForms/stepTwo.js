import React, { Fragment } from "react";
import SelectedOne from "../elements/selectedOne";
import NextStep from "../elements/nextbutton";
import Total from "../elements/total";
import Lists from "../elements/selectelement";
import { BsFillCircleFill } from "react-icons/bs";
import { FaBitcoin, FaCheckCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPromo, setCC } from "../../../store/actions/bitpayActions";
const StepTwo = ({ data }) => {
  const selectedCC = useSelector(state => state.bitpayReducer.cryptoCurrency);
  const selectedPromo = useSelector(state => state.bitpayReducer.promo);
  const dispatch = useDispatch();
  //const [selectID, setID] = useState("");
  const iconBit = <FaBitcoin className="icon-first" />;
  const textBit = "Crypto currency";
  const iconSelICON = <FaCheckCircle className="icon-first" />;
  const textICON = selectedCC ? selectedCC.name : "";
  const api = [
    { _id: 1, name: "FREE SHIPPING" },
    { _id: 2, name: "10% OFF NEXT ORDER" }
  ];
  const history = useHistory();
  const ChangeURL = () => {
    history.push("/");
  };
  const SetURL = () => {
    history.push("/stepthree");
  };
  const ChangeAll = () => {
    history.push("/");
    dispatch(setPromo(null));
    dispatch(setCC(null));
  };
  const selPromo = selectedPromo ? selectedPromo.name : "";
  return (
    <Fragment>
      <SelectedOne icon={iconBit} text={textBit} ChangeURL={ChangeAll} />
      <SelectedOne icon={iconSelICON} text={textICON} ChangeURL={ChangeURL} />
      <h5 className="header-el">
        <b>Total</b>
      </h5>
      <Total selectedCC={selectedCC} />
      <h5 className="header-el" style={{ marginTop: "60px" }}>
        <b>Select promo</b>
      </h5>
      {api.map((ds, i) => {
        const ic =
          ds.name === selPromo ? (
            <FaCheckCircle
              className="icon-other"
              style={{ color: "rgb(65, 125, 265)" }}
            />
          ) : (
            <BsFillCircleFill
              className="icon-other"
              onClick={() => {
                dispatch(setPromo(ds));
                //  setID(ds._id);
                //  alert(ds._id);
              }}
            />
          );
        return <Lists key={i} text={ds.name} icon={ic} />;
      })}
      <NextStep SetURL={SetURL} />
    </Fragment>
  );
};
export default StepTwo;
