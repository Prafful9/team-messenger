import React from 'react';
import "./Chat.css";
import { AttachFile, Message, MoreVert, SearchOutlined, SettingsInputAntenna } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
function Chat() {
    return ( 
        <div className="Chat">
            <div className="chat">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>

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
            <div className="Chat__body">
                <p className="Chat__message">
                    <span className="Chat__name">Sonny </span>
                    
                         This is a message
                         <span className="Chat__timestamp"> {new Date().toUTCString()} </span>
                </p>

                <p className="Chat__message Chat__reciever">
                    <span className="Chat__name">Sonny </span>
                    
                         This is a message
                         <span className="Chat__timestamp"> {new Date().toUTCString()} </span>
                </p>

                
              </div>

              <div className="Chat__footer">
                  <InsertEmoticonIcon />
                  <form>
                      <input placeholder="Type a message"
                        type="text" />
                        <button type="submit">Send a message</button>

                  </form>
                  <MicIcon />
                  

              </div>
            
        </div>
    );
}

export default Chat
