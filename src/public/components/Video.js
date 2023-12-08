// VideoPlayer.js
import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player';
import { storage } from 'firebase/firebase';
import NextButton from './NextButton';

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
    <div style={{width:"100%"}}>
      <ReactPlayer url={url} controls width="100%"/>
      <div style={{display:"flex", width:"100%", justifyContent:"flex-end"}}>
        <NextButton  style={{marginTop:"20px"}} url="/page/2"/>
      </div>
    </div>
  );
};

export default VideoPlayer;
