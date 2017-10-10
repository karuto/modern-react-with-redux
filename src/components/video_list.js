import React from 'react';
import VideoListItem from './video_list_item';

// create a video list component that will take a list of video list items.
// for each item, render it with a unique key so that React doesn't have warnings.


const VideoList = (props) => {
  const videoListItems = props.videos.map((item) => {
      return <VideoListItem data={item}/>;
  });
  return (
    <div>
      {videoListItems}
    </div>
  );
}

export default VideoList;
