import React from "react";

import Header from '../common/header';
import Footer from '../common/footer';
import LeftNavBox from '../common/leftnavbox';

const Endorsements = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <LeftNavBox activemenu="endorsements"/>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Endorsements;
