import React from "react";
import ChatMessage from "../../../components/ChatMessage";
import ActiveChatHeader from "../../../components/ActiveChatHeader";

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
    <div>
      <ActiveChatHeader/>

      {chatMessages.map((chatMessage, index) => (
        <ChatMessage key={index} {...chatMessage} />
      ))}

      <div />
    </div>
  );
};

export default ActiveChatContent;
