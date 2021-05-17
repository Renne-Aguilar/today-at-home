import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Video from './Components/Video';
import db from './firebase';
import VideoSidebar from './Components/VideoSidebar';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect (() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
      ))
  }, [])

  return (
    <Router>
    <div className="app">

      <Switch>
        
      <Route path="/login">
          <Login />
      </Route>

      <Route path="/profile">
        <div className="users_photos">
         <Profile/>
        </div>
      </Route>
         
        
      <Route path="/">
      <Header/>
        <div className="app_videos">

        {posts.map(
         ({url, channel, description, song, likes, shares, messages}) => (
          <Video
           url={url}
           channel={channel}
           song={song}
           likes={likes}
           messages={messages}
           description={description}
           shares={shares}/>
          )
          )}

        </div>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
