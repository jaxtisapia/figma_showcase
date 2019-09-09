import React from "react";

import "../../../style/_ActiveChatContent.scss";

import ChatMessage from "../../../components/ChatMessage";
import ActiveChatHeader from "../../../components/ActiveChatHeader";
import ChatSendLayout from "../../../components/ChatSendLayout";

const chatMessages = [
  {
    text:
      "Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application",
    isSender: false,
    file: null
  },
  {
    text: "Can I send you files?",
    isSender: false,
    file: null
  },
  {
    text: "Hey! Okay, send out.",
    isSender: true,
    file: null
  },
  {
    text: null,
    isSender: false,
    file: { name: "Style.zip", size: "41.36 MB" }
  },
  {
    text:
      "Hello! I tweaked everything you asked. I am sending the finished file.",
    isSender: false,
    file: {
      name: "NEW_Style.zip",
      size: "52.05 MB"
    }
  }
];

const ActiveChatContent = () => {
  return (
    <div className="ChatDashboard_ActiveChatContent">
      <div>
        <ActiveChatHeader />
      </div>

      <div>
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage key={index} {...chatMessage} />
        ))}
      </div>

      <div className="ChatDashboard_ActiveChatContent__chatSendLayout">
        <ChatSendLayout />
      </div>
    </div>
  );
};

export default ActiveChatContent;
