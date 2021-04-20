import React from "react";

import Header from '../common/header';
import Footer from '../common/footer';
import LeftNavBox from '../common/leftnavbox';

const Contacts = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <LeftNavBox activemenu="contacts"/>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contacts;
