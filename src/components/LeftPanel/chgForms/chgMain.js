import React, { Fragment } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from "./stepFive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { GetData } from "../../apiCall/callApi";
const ChgMain = () => {
  /*useEffect(() => {
    const GetBase = async e => {
      const url = "";
      const getd = await GetData(url);
      console.log("bazaaaaaaaaaaaaa!", getd);
    };
    GetBase();
  }, []);*/
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" name="StepOne" component={StepOne} />
          <Route path="/steptwo" name="StepTwo" component={StepTwo} />
          <Route path="/stepthree" name="StepThree" component={StepThree} />
          <Route path="/stepfour" name="StepFour" component={StepFour} />
          <Route path="/stepfive" name="StepFive" component={StepFive} />
        </Switch>
      </Fragment>
    </Router>
  );
};
export default ChgMain;
