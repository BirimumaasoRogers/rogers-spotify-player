import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library";
import Favorites from "../favorites/favorites";
import Feed from "../feed/feed";
import Player from "../player/player";
import Trending from "../trending/trending";
import "./home.css";
import Sidebar from "../../components/sidebar";

export default function Home() {
  return <Router>
    <div className="main-body">
    <Sidebar />
    <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/player" element={<Player />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  </Router>;
}
