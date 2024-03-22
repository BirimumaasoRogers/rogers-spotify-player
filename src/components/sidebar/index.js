import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SideBarButton from "./sideBarButton";
import {MdFavorite} from "react-icons/md";
import {FaGripfire, FaPlay} from "react-icons/fa";
import {FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";
import {MdSpaceDashboard} from "react-icons/md";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState("https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg");

  useEffect(() => {
    apiClient.get("/me").then((res) => {
      setImage(res.data.images[0].url);
    });
  }, []);
  return (
    <div className="sidebar-container">
      <img
        src={image}
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
