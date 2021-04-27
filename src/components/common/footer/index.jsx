import React from "react";
import "./index.css";
import Image from "../atoms/image";
import FooterFacbookIcon from "../../../images/icons/footer-facebook-icon.svg";
import FooterInstagramIcon from "../../../images/icons/footer-facebook-icon.svg";
import FooterTwitterIcon from "../../../images/icons/footer-twitter-icon.svg";
const Footer = () => {
  const footerMenus = ["About Us", "Privacy Policy", "Terms of Use", "Contact"];
  const footerIcons = [
    FooterFacbookIcon,
    FooterInstagramIcon,
    FooterTwitterIcon,
  ];
  return (
    <>
      <div className="FooterContainer">
        <div className="CopyrightSection">Copyright 2020 SportsID, INC.</div>
        <div className="MenuSection">
          {footerMenus.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="SocialMediaIconsSection">
          {footerIcons.map((item, index) => (
            <Image key={index} src={item} alt="" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
