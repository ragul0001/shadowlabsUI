// VideoPlayer.js
import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ activeVideo }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Get the HTML5 video element and disable the download option
    const video = playerRef.current.getInternalPlayer();
    if (video && video.controlsList) {
      video.controlsList.add('nodownload');  // Prevent download
    }
  }, [activeVideo]); // Re-run effect when activeVideo changes

  return (
    <div className="video-container">
      <ReactPlayer
        ref={playerRef}
        url={activeVideo}
        playing
        controls
        width="100%"
        height="100%"
        className="video-class"
      />
    </div>
  );
};

export default VideoPlayer;
