import React from "react";
import "./index.css";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import LeftNavBox from "../../components/common/leftnavbox";
import DashboardCenterColumn from "../../components/dashboardcentercolumn";
import DashboardRightColumn from "../../components/dashboardrightcolumn";
import { isMobile } from "../../utils/common";
import PageHeading from "../../components/common/pageHeading";
import AgendaBox from "../../components/agendabox";
import ConnectionBox from "../../components/connectionsbox";

const Dashboard = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="row">
        {!isMobile() && (
          <div className="side">
            <LeftNavBox activemenu="dashboard" />
          </div>
        )}
        <div className="main">
          <PageHeading headingText="My Dashboard" />
          <DashboardCenterColumn />
          <AgendaBox />
        </div>
        <div className="right">
          <DashboardRightColumn />
          <ConnectionBox />
        </div>
      </div>
      <div className="Footer">
      <Footer />
      </div>
    </>
  );
};

export default Dashboard;
