import React, { Component } from "react";
import SideBar from "./containers/SideBar";
import ContentView from "./containers/ContentView";

class ChatDashboardScene extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>

        <div className="col-9">
          <ContentView />
        </div>
      </div>
    );
  }
}

export default ChatDashboardScene;
