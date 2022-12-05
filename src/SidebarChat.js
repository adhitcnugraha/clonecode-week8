import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Team 8</h2>
      </div>
    </div>
  );
}

export default SidebarChat;
