import React, { useState } from "react";
import image from "./Data/MusicTracks";

function Box({ letra, image }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <img src={image} />
      <p>{letra}</p>
    </div>
  );
}
