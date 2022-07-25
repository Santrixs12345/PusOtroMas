import * as React from "react";
import Box from "@mui/material/Box";
import musicTracks from "./Data/MusicTracks";

export default function Columns() {
  const items = [...Array(15)].map((val, i) => `Item ${i}`);

  return (
    <div>
      <h1>This is Fuking Spotifiz</h1>
      <div className="container">
        <div className="center-col">
          <span>Rolones</span>
          <ul>
            {items.map((musicTracks, i) => (
              <li key={`Item ${i}`}>
                <button>{musicTracks}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-col">
          <div className="botonL">
            {musicTracks.map((musicTracks, i) => (
              <Box>
                {i}
                {musicTracks.image}
                {musicTracks.letra}
              </Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
