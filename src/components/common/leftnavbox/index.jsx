import React from "react";
import Image from "../atoms/image";
import "./index.css";
import DashboardIcon from "../../../images/icons/icon-menu-dashboard.svg";
import NewsFeedIcon from "../../../images/icons/icon-menu-newsfeed.svg";
import StatsIcon from "../../../images/icons/icon-menu-stats.svg";
import TrackingIcon from "../../../images/icons/icon-menu-tracking.svg";
import CalendarIcon from "../../../images/icons/icon-menu-calendar.svg";
import ContactsIcon from "../../../images/icons/icon-menu-contacts.svg";
import EndorsementsIcon from "../../../images/icons/icon-menu-endorsements.svg";

import DashboardIconActive from "../../../images/icons/active/icon-menu-dashboard.svg";
import NewsFeedIconActive from "../../../images/icons/active/icon-menu-newsfeed.svg";
import StatsIconActive from "../../../images/icons/active/icon-menu-stats.svg";
import TrackingIconActive from "../../../images/icons/active/icon-menu-tracking.svg";
import CalendarIconActive from "../../../images/icons/active/icon-menu-calendar.svg";
import ContactsIconActive from "../../../images/icons/active/icon-menu-contacts.svg";
import EndorsementsIconActive from "../../../images/icons/active/icon-menu-endorsements.svg";

import { useHistory } from 'react-router-dom';



const LeftNavBox = (props) => {
const history = useHistory();
const { activemenu } = props;
console.log("activemenu", activemenu)
  const linkItems = [
    {name: "DASHBOARD", classname: activemenu === "dashboard" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "dashboard" ? DashboardIconActive : DashboardIcon, link:"/"},
    {name: "NEWSFEED", classname: activemenu === "newsfeed" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "newsfeed" ? NewsFeedIconActive : NewsFeedIcon, link:"/newsfeed"},
    {name: "STATS", classname: activemenu === "stats" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "stats" ? StatsIconActive : StatsIcon, link: "/stats"},
    {name: "TRACKING", classname: activemenu === "tracking" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "tracking" ? TrackingIconActive : TrackingIcon, link: "/tracking"},
    {name: "CALENDAR", classname: activemenu === "contacts" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "contacts" ? ContactsIconActive : ContactsIcon, link: "/contacts"},
    {name: "CONTACTS", classname: activemenu === "calendar" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "calendar" ? CalendarIconActive : CalendarIcon, link: "/calendar"},
    {name: "ENDORSEMENTS", classname: activemenu === "endorsements" ? "ActiveMenu" : "Menu", imageSrc: activemenu === "endorsements" ? EndorsementsIconActive :EndorsementsIcon, link: "/endorsements"}

  ] 

  const route = (link) =>{
    history.push(link)
  }
  return (
    <>
      <div className="LeftNavbarContainer">
        {
          linkItems.map((item, index) => 
          <div key={index+item.name} onClick={() => route(item.link)} className={item.classname}>
            <Image src={item.imageSrc} className="Image" />
            <span >{item.name}</span>
          </div>
          )
        }
      </div>
    </>
  );
};

export default LeftNavBox;
