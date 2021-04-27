import React from "react";
import Image from "../atoms/image";
import AdidasLogo from "../../../images/adidas-logo.png";
import "./index.css";

const PageHeading = (props) => {
  const { headingText } = props;
  return (
    <>
      <div className="PageHeadingContainer">
        {headingText}
        <span className="PoweredByText">brought to you by</span>
        <Image className="Image"  src={AdidasLogo} alt="Adidas Logo" />
      </div>
    </>
  );
};

export default PageHeading;
