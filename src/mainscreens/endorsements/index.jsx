import React from "react";

import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import LeftNavBox from '../../components/common/leftnavbox';

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
