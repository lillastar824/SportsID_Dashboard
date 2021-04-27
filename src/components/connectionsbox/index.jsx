import React from "react";
import "./index.css";
import Button from '../common/button';
import BoxContainer from "../common/containerbox";
import PhotoOne from "../../images/photo-1.png";
import PhotoTwo from "../../images/photo-2.png";
import PhotoThree from "../../images/photo-4.png";
import ConnectionIcon from '../../images/icons/connection.png'
import Image from "../common/atoms/image";

const photos = [PhotoOne, PhotoTwo, PhotoThree, PhotoOne, PhotoTwo, PhotoThree]
const ConnectionBox = () => {
  return (
    <BoxContainer>
      <div className="ConnectionBoxContainer">
        <div className="top">Connections</div>
        <div className="ContentFistRow">
          <div>
            <Image className="CloudIcon" src={ConnectionIcon} alt="" />
          </div>
          <div className="TempText">200,456</div>
          <div>
          <Button onclick={onclick} value="INVITE" />
          </div>
        </div>
        <div className="ConnectionContentBottomRow">
          <div className="PhotosSection">
          {photos.map((item, index) => (
            <div key={index} className="PhotoSection">
              <div className="PhotoContainer">
                <Image
                    className="Photo"
                    src={item}
                    alt=""
                  />
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </BoxContainer>
  );
};

export default ConnectionBox;
