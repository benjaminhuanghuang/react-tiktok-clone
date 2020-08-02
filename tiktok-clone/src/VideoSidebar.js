import React, { useState } from "react";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

import "./VideoSidebar.css";

function VideoSidebar() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p>3</p>
      </div>
      <div className="videoSidebar_button">
        <MessageIcon />
        <p>3</p>
      </div>
      <div className="videoSidebar_button">
        <ShareIcon />
        <p>3</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
