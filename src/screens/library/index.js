import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import "./library.css";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    APIKit.get("/me/playlists?limit=10").then(
      (response) => {
        setPlaylists(response.data.items);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists &&
          playlists.map((playlist) => (
            <div className="playlist-card" key={playlist.id}>
              <img src={playlist.images[0].url} className="playlist-image" alt="Playlist-Art"/>
              <p>
              {playlist.name}
              </p>
              <p>
              {playlist.tracks.total} Songs
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
