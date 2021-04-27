import React from "react";
import "./index.css";
import BoxContainer from "../common/containerbox";
import CloudSunBig from "../../images/icons/weather-cloud-sun-active.png";
import Image from "../common/atoms/image";
import CloudRain from "../../images/icons/weather-cloud-rain.png";
import CloudSun from "../../images/icons/weather-cloud-sun.png";
import CloudThunder from "../../images/icons/weather-cloud-thunder.png";
import Sun from "../../images/icons/weather-sun.png";
const WeatherBox = (props) => {
  const bottonBOxValue = [
    {day:"SUN", icon:CloudRain,temp: "21"},
    {day:"MON", icon:Sun,temp: "21"},
    {day:"TUE", icon:CloudRain,temp: "21"},
    {day:"WED", icon:CloudSun,temp: "21"},
    {day:"THU", icon:CloudThunder,temp: "21"},
    {day:"FRI", icon:CloudSun,temp: "21"},
    {day:"SAT", icon:Sun,temp: "21"},
  ];

  return (
    <BoxContainer weatherBox>
      <div className="WeatherBoxContainer">
        <div className="top">Weather</div>
        <div className="ContentFistRow">
          <div>
            <Image className="CloudIcon" src={CloudSunBig} alt="" />
          </div>
          <div className="TempText">21&#176;</div>
          <div>
            <div className="CityText">San Francisco, CA</div>
            <div className="SpaceStatus">Mostly Sunny</div>
          </div>
        </div>
        <div className="WeatherContentBottomRow">
          {bottonBOxValue.map((items, index) => (
            <div key={index} className="DayTempBox">
              <div>
                {items.day}
              </div>
              <div>
                <Image
                    className="CloudIconSmall"
                    src={items.icon}
                    alt=""
                  />
              </div>
              <div>
                {items.temp}&#176;
              </div>
            </div>
          ))}
        </div>
      </div>
    </BoxContainer>
  );
};

export default WeatherBox;
