import React from "react";
const SelectedOne = ({ icon, text, ChangeURL }) => {
  return (
    <div className="first-el">
      <div className="row">
        {icon}

        <p className="title-chc">{text}</p>
        <p className="chg-txt" onClick={ChangeURL}>
          <b>Change</b>
        </p>
      </div>
    </div>
  );
};
export default SelectedOne;
