import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className= 'Sidebar'>
            
            <div className="Sidebar__header">
                <Avatar src= "https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"/>
                <div className="Sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    

                </div>
            </div>

            <div className="Sidebar__Search">
                <div className="Sidebar__SearchContainer">
                 <SearchOutlined />
                 <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="Sidebar__Chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            
        </div>
    );
}

export default Sidebar
