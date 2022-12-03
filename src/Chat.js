import React from "react";
import "./Chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import moment from "moment";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

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
        <p className="chat__message">
          <span className="chat__name">Nizar</span>
          Yo, dude
          <span className="chat__timestamp">{moment().format("hh:mm")}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Resti</span>
          is this WacApp? it's seems like Whats*** i guess.
          <span className="chat__timestamp">{moment().format("hh:mm")}</span>
        </p>

        <p className="chat__message">
          <span className="chat__name">Cindy</span>I think its quite better than
          the original one, haha~
          <span className="chat__timestamp">{moment().format("hh:mm")}</span>
        </p>

        <p className="chat__message chat__receiver">
          <span className="chat__name">Adhit</span>maybe, yes HAHAHA
          <span className="chat__timestamp">{moment().format("hh:mm")}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
