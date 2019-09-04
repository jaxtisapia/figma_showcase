import React, { Component } from "react";

import "../../style/_SideBar.scss";

import SideBarNavItem from "./SideBarNavItem";

import UserPhoto from "../../assets/user_photo.png";
import GridIcon from "../../assets/grid.svg";
import ChatActiveIcon from "../../assets/chatActive.png";
import PersonIcon from "../../assets/person.svg";
import BellIcon from "../../assets/bell.svg";
import SettingIcon from "../../assets/settings.svg";
import CalendarIcon from "../../assets/calendar.svg";
import PowerIcon from "../../assets/power.svg";

const navigations = [
  { name: "Home", icon: GridIcon },
  { name: "Chat", icon: ChatActiveIcon },
  { name: "Contact", icon: PersonIcon },
  { name: "Notifications", icon: BellIcon },
  { name: "Calendar", icon: CalendarIcon },
  { name: "Settings", icon: SettingIcon }
];

class SideBar extends Component {
  render() {
    return (
      <div className="ChatDashboard_SideBar">
        <div className="ChatDashboard_SideBar__userProfile">
          <img
            className="ChatDashboard_SideBar__userProfile--avatar"
            src={UserPhoto}
          />
          <h5 className="ChatDashboard_SideBar__userProfile--name">
            Henry Jabawockies
          </h5>
        </div>

        <div className="ChatDashboard_SideBar__navigationList">
          {navigations.map(navigation => {
            return <SideBarNavItem {...navigation} />;
          })}
        </div>

        <SideBarNavItem name="Logout" icon={PowerIcon}/>
      </div>
    );
  }
}

export default SideBar;
