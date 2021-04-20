import React from "react";

import Header from "../common/header";
import Footer from "../common/footer";
import LeftNavBox from "../common/leftnavbox";
import SidProfile from "../common/sidProfilebox";
import { isMobile } from '../../utils/common'

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row">
        {!isMobile() && <div className="side">
          <LeftNavBox activemenu="dashboard" />
        </div>}
        <div className="main">
          <SidProfile />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
