import React from "react";

import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

import "./VideoFooter.css";

function VideoFooter({channel, description, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@aaa</h3>
        <p>This is....</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>asfasfsadf</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
    </div>
  );
}

export default VideoFooter;
