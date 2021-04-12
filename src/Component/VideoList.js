import React from 'react';
import VideoItem from './VideoItem'
 //Es6 onwards direct properities instead of 'props' can be direct called by destructuring

const VideoList =({videos,onVideoSelect}) => {
  const renderedList =  videos.map((video) => {return (
    
    <VideoItem 
    key={video.id.videoId}
    onVideoSelect={onVideoSelect} 
    video={video}/> )
});
    
    
    
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;