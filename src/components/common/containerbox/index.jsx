import React from "react";
import "./index.css";
import { isMobile } from "../../../utils/common";

const BoxContainer = (props) => {
  const { weatherBox } = props;
  return (
    <>
      <div
        className={`BoxContainer ${
          weatherBox && !isMobile() ? "WeatherBox" : ""
        }`}
      >
        {props.children}
      </div>
    </>
  );
};

export default BoxContainer;
