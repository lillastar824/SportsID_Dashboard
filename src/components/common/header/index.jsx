import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderLogo from "../../../images/header-logo.png";
import Image from "../atoms/image";
import Input from "../atoms/input";
import MessageImage from "../../../images/icons/icon-nav-messages.svg";
import BellIcon from "../../../images/icons/icon-nav-notification.svg";
import UserImage from '../../../images/avatar-user-profile-sm.jpg'
import { isMobile } from '../../../utils/common'

const Header = () => {
  const [screenSize, getScreenSize] = useState(0);
  useEffect(() => {
    document.addEventListener("resize", () => {
      getScreenSize(window.screen.width);
    });
  }, []);
  const rightBoxWidth = isMobile() ? window.screen.width - 137 : window.screen.width - 227;
  return (
    <>
  {console.log("screenSize", screenSize)}

      <div className="HeaderContainder">
        <div className="logoContainer">
          <Image src={HeaderLogo} className="headerlogo" />
        </div>
        <div
          className="HeaderRightContainer"
          style={{ width: `${rightBoxWidth}px` }}
        >
          {!isMobile() && <><Input className="searchInput" placeholder="Search" />
          <div className="MessageButton">
            <Image src={MessageImage} className="messageImage" />
            <span>MESSAGES</span>
          </div>
          <div className="NotificationButton">
            <Image src={BellIcon} className="NotificationImage" />
            <span>NOTIFICATIONS</span>
          </div></>}
          
          <div className="UserDetailsBox">
            <div className="userDetails">
            <div className="userName">Cameron Jarell Newton</div>
            <div className="profileStatusText">40% of profile complete</div>
            </div>
            <Image src={UserImage} className="userImage" />
          </div>
        </div>
      </div>
      {isMobile() && <div className="mobileSearch"><Input className="searchInput" placeholder="Search" />
          <div className="mobileSearchMessageButton">
            <Image src={MessageImage} className="messageImage" />
            <span>MESSAGES</span>
          </div>
          <div className="mobileSearchNotificationButton">
            <Image src={BellIcon} className="NotificationImage" />
            <span>NOTIFICATIONS</span>
          </div></div>}
    </>
  );
};

export default Header;
