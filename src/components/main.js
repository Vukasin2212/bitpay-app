import React from "react";
import "../css/main.css";
import RightPanel from "./rightpanel";
import LeftPanel from "./LeftPanel/leftpanel";
const Main = () => {
  return (
    <div className="row main">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};
export default Main;
