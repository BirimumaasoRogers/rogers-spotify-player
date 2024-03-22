import React from "react";
import "./sidebar.css";
import SideBarButton from "./sideBarButton";
import {MdFavorite} from "react-icons/md";
import {FaGripfire, FaPlay} from "react-icons/fa";
import {FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";
import {MdSpaceDashboard} from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="/D:/Personal/rogers-profile_headshot.JPEG"
        alt="Profile"
        className="profile-img"
      />
      <div>
        <SideBarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SideBarButton title="Trending" to="/trending" icon={<FaGripfire/>} />
        <SideBarButton title="Player" to="/player" icon={<FaPlay/>} />
        <SideBarButton title="Favorites" to="/favorites" icon={<MdFavorite/>} />
        <SideBarButton title="Library" to="/library" icon={<IoLibrary/>} />
      </div>
      <SideBarButton title="Sign Out" to="" icon={<FaSignOutAlt/>} />
    </div>
  );
}
