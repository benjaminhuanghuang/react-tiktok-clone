import React, { useState } from "react";

//
import Video from "./Video";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([
    {
      url: "https://video.twimg.com/amplify_video/820082508054179840/vid/720x720/K8BEWmSeNsrQI_pA.mp4",
      channel: "Cupertino High",
      description: "This is song by Little Fox .....",
      song: "Song of fox.....",
      likes: 11111,
      messages: 2222,
      shares: 3333,
    },
  ]);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video, index) => (
          <Video
            key={index}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
