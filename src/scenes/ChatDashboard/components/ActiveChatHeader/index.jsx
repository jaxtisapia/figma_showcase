import React from "react";

import "./_ActiceChatHeader.scss";

import UserChatAvatar from "../../assets/UserChatAvatar.png";
import AttachIcon from "../../assets/attach.svg";
import MoreVerticalIcon from "../../assets/more_vertical.svg";
import RoundedButton from "../RoundedButton";

const ActiveChatHeader = () => {
  return (
    <div className="fsc_ActiveChatHeader">
      <div className="fsc_ActiveChatHeader__userInfo">
        <div>
          <img
            className="fsc_ActiveChatHeader__userInfo--avatar"
            src={UserChatAvatar}
          />
        </div>

        <div>
          <h5 className="fsc_ActiveChatHeader__userInfo--name">Nikka Jerado</h5>
          <p className="fsc_ActiveChatHeader__userInfo--lastSeen">
            last online 5 hours ago
          </p>
        </div>
      </div>

      <div className="fsc_ActiveChatHeader__actions">
        <RoundedButton className="fsc_RoundedButton">
          <img src={AttachIcon} />
        </RoundedButton>

        <RoundedButton>
          <img src={MoreVerticalIcon} />
        </RoundedButton>
      </div>
    </div>
  );
};

export default ActiveChatHeader;
