// VideoPlayer.js
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { storage } from 'firebase/firebase';

const VideoPlayer = ({ videoFileName }) => {

  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {

    const fetchUrl = async () => {

      const videoUrl = await storage.ref(`interactive/${videoFileName}`).getDownloadURL();
      setUrl(videoUrl)
      setIsLoading(false)
    }
    fetchUrl()
  },[])
  if(!isLoading)
  return (
    <div style={{display:'flex', alignItems:'center', height:'100%'}}>
      <ReactPlayer url={url} controls />
    </div>
  );
};

export default VideoPlayer;
