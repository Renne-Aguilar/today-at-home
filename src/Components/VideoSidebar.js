import React, { useState } from 'react';
import '../Style/VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';

function VideoSidebar( {likes, shares, messages}) {
  const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar_buttons">
              {liked ? (
                <FavoriteIcon fontSize="large"  onClick={(e) => setLiked(false)}
                />) : ( 
                <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}/>
              )}
              
              <p>{liked ? likes + 1 : likes }</p>
            </div>
            <div className="videoSidebar_buttons">
              <ShareIcon/>
              <p>{shares}</p>
            </div>
            <div className="videoSidebar_buttons">
              <ChatIcon/>
              <p>{messages}</p>
            </div>
            
        </div>
    )
}

export default VideoSidebar
