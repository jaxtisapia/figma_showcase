import React, { Component } from "react";

const navigations = [
  { name: "Home" },
  { name: "Chat" },
  { name: "Contact" },
  { name: "Notifications" },
  { name: "Calendar" },
  { name: "Settings" }
];

class SideBar extends Component {
  render() {
    //  todo remove styles == {{ }}
    return (
      <div style={{ background: "yellow", color: "white" }}>
        {/* todo disintegrate into seperate containers */}
        {navigations.map(navigation => {
          return <p>{navigation.name}</p>;
        })}
      </div>
    );
  }
}

export default SideBar;
