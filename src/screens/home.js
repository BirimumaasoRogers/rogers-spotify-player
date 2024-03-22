import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./library";
import Favorites from "./favorites";
import Feed from "./feed";
import Player from "./player";
import Trending from "./trending";

export default function Home() {
  return <Router>
    <Routes>
      <Route path="/" element={<Library />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/player" element={<Player />} />
      <Route path="/trending" element={<Trending />} />
    </Routes>
  </Router>;
}
