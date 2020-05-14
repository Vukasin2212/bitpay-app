import React from "react";
import "../../css/leftpanel.css";
import Header from "./header";
import ChgMain from "./chgForms/chgMain";
const LeftPanel = () => {
  return (
    <div className="col-md-7 panel-one">
      <Header />
      <ChgMain />
    </div>
  );
};
export default LeftPanel;
