import React from "react";
import "./index.css";
import BoxContainer from "../common/containerbox";
import BottonDummyImage from "../../images/postnewsbotton.png";
import Image from '../common/atoms/image';
import Button from '../common/button'

const Postnewsfeed = (props) => {
  return (
    <BoxContainer>
      <div className="postNewsFeedContainer">
        <div className="top">Post to Newsfeed</div>
        <div>
          <textarea
            className="TextArea"
            placeholder="What's going on, Mary?"
          ></textarea>
        </div>
        <div className="bottom">
          <div><Image className="newsFeedDummy" src={BottonDummyImage} /></div>
          <div className="rightButton"><Button onclick={onclick} value="POST" /></div>
        </div>
      </div>
    </BoxContainer>
  );
};

export default Postnewsfeed;
