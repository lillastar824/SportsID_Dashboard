import React from "react";

import Header from '../common/header';
import Footer from '../common/footer';
import LeftNavBox from '../common/leftnavbox';

const Dashboard = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <LeftNavBox activemenu="tracking"/>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;
