import React from 'react';
import "./VideoRow.css";

function VideoRow({views,videoUrl, subs, description, timestamp, channel, title, image}) {
  return (
    
    <div className="videoRow">
    <img  className="videoRow__image" src={image} alt="" />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "} 
          <span>
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span> {" "}
          {views} views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;