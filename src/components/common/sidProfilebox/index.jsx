import React, { useEffect, useState } from "react";
import Link from "../atoms/Link";
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



const SidProfile = (props) => {
  return (
    <>
      <div className="sidProfileBoxContainer">
        <div>One</div>
        <div>Two</div>
      </div>
    </>
  );
};

export default SidProfile;
