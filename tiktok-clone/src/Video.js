import React, { useState, useRef } from "react";

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

import "./Video.css";

function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        loop=""
        src="https://www.youtube.com/watch?v=zOWJqNPeifU"
        onClick={onVideoPress}
      ></video>
      <VideoFooter channel="channel..." description="description...." song="song....." />
      <VideoSidebar />
    </div>
  );
}

export default Video;
