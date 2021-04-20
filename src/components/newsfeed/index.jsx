import React from "react";

import Header from '../common/header';
import Footer from '../common/footer';
import LeftNavBox from '../common/leftnavbox';

const Calendar = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <LeftNavBox activemenu="newsfeed"/>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Calendar;
