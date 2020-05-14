import React from "react";
const Lists = ({ icon, text }) => {
  return (
    <div className="element-no-mrg">
      <div className="row">
        {icon}

        <p className="select-text">
          <b>{text}</b>
        </p>
      </div>
    </div>
  );
};
export default Lists;
