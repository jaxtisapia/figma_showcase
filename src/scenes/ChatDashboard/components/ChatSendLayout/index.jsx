import React from "react";

import "./_ChatSendLayout.scss";

import PlusIconWhite from "../../assets/plus_white.svg";
import EmojiOpenIcon from "../../assets/emojiOpenIcon.png";
import NavigationWhiteIcon from "../../assets/navigation_white.svg";
import RoundedButton from "../RoundedButton";

const ChatSendLayout = () => {
  return (
    <div className="fsc_ChatSendLayout">
      <div className="fsc_ChatSendLayout__leftContent">
        <div className="fsc_ChatSendLayout__leftContent--moreBtn">
          <RoundedButton inverted small>
            <img src={PlusIconWhite} />
          </RoundedButton>
        </div>

        <div className="fsc_ChatSendLayout__leftContent--inputMessage">
          <p>Type a message here</p>
        </div>
      </div>

      <div className="fsc_ChatSendLayout__rightContent">
        <div className="fsc_ChatSendLayout__rightContent--emojiOpen">
          <img src={EmojiOpenIcon} />
        </div>

        <div className="fsc_ChatSendLayout__rightContent--sendBtn">
          <RoundedButton inverted medium>
            <img src={NavigationWhiteIcon} />
          </RoundedButton>
        </div>
      </div>
    </div>
  );
};

export default ChatSendLayout;
