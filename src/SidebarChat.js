import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://img.freepik.com/premium-vector/cute-white-cat-cartoon-vector-illustration_42750-808.jpg?w=2000" />
      <div className="sidebarChat__info">
        <h2>Team 8</h2>
        <p>...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
