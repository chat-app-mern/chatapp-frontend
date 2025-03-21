import React, { useState } from "react";
import video from "../images/video.svg";
import audio from "../images/audio.svg";
import menu from "../images/menu.svg";
import sendIcon from "../images/sendIcon.png";
import micIcon from "../images/video-msg.svg";
import personImage from "../images/profile-photo-header.png";

const Detailpage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const isOnline = true;

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessages((prev) => [...prev, message]);
    setMessage("");
  };

  return (
    <div className="chat-details-wrap">
      <div className="container">
        <div className="chat-details">
          <div className="chat-detail-header">
            <div className="detail-header-left">
              <div className="chat-author">
                <div className="author-img">
                  <img src={personImage} alt="author-img" />
                  <span
                    className={`chat-status ${isOnline ? "online" : "offline"}`}
                  ></span>
                </div>
                <div className="author-name-status">
                  <div className="author-name">Aarav</div>
                  <div className="author-status">
                    {isOnline ? "Online" : "Offline"}
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-header-right">
              <div className="detail-social">
                <img src={audio} alt="audio-img" />
                <img src={video} alt="video-img" />
                <img src={menu} alt="menu-img" />
              </div>
            </div>
          </div>

          <div className="chat-detail-content">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-msg ${
                  index % 2 === 0 ? "receiver" : "sender"
                }`}
              >
                <div className="chat-text">{msg}</div>
                <div className="chat-time">Today, 2:02pm</div>
              </div>
            ))}
          </div>

          <div className="chat-detail-footer">
            <div className="input-wrap">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              <button onClick={handleSendMessage}>
                <img src={sendIcon} alt="Send" />
              </button>
            </div>
            <div className="voice-msg">
              <img src={micIcon} alt="voice-msg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
