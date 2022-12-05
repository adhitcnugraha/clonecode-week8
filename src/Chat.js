import React, { useState } from "react";
import "./Chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import axios from "./axios";
import moment from "moment";

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Adhitia",
      received: true,
    });
    // timestamp: "One minute ago",

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src="https://img.freepik.com/premium-vector/cute-white-cat-cartoon-vector-illustration_42750-808.jpg?w=2000" />

        <div className="chat__headerInfo">
          <h3>Team 8</h3>
          <p>Cindy, Nizar, Resti, Me</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            {/* <span className="chat__timestamp">{message.timestamp}</span> */}
            <span className="chat__timestamp">
              {moment().format("hh:mm A")}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message ...
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
