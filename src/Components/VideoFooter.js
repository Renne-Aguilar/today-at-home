import React from 'react';
import '../Style/VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
import { Link } from "react-router-dom";

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videofooter">
            <div className="videoFooter_text">
                <Link to="/profile">
                 <h3>@{channel}</h3>
                </Link>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                  <MusicNoteIcon className="videoFooter_icon"/>
                  <Ticker mode="smooth">
                      {({ index }) => (
                        <>
                            <p>{song}</p>
                          </>
                      )}
                  </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" src="https://c0.klipartz.com/pngpicture/982/282/gratis-png-disco-de-vinilo-vinilo-brillante-thumbnail.png"/>
        </div>
    )
}

export default VideoFooter
