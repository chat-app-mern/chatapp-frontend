import React from "react";
import { Link } from "react-router-dom";
import Chats from "../models/chats.ts";

const ChatCard: React.FC<{ chat: Chats }> = ({ chat }) => {
  return (
    <div className="chat-card-wrapper">
      <Link to={`chat/${chat.id}`}>
        <div className="chat-card">
          <div className="chat-card-information">
            <div className="chat-image">
              <img
                src={`${chat.image}`}
                alt={chat.name}
                height={70}
                width={70}
              />
            </div>
            <div className="chat-details">
              <div className="name">{chat.name}</div>
              <div className="message">{chat.message}</div>
            </div>
          </div>
          <div className="chat-card-time-and-status">
            <div className="time">{chat.time}</div>
            <div className="status">{chat.status}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChatCard;
