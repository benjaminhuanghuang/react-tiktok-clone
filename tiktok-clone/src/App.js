import React, {useState} from "react";

//
import Video from "./Video";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([
    {
      url: "",
      channel: "channel....",
      description: "description.....",
      song: "song.....",
      likes: 11111,
      messages: 2222,
      shares: 3333,
    },
  ]);


  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((video) => (
          <Video
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
