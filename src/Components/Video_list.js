import React from 'react';
import Videolistitems from './Video_list_items';
import '../style/style.css'

const VideoList= (props) => {
  const VideoItems = props.videos.map((video) =>{
    return (
      <Videolistitems
      OnVideoSelect={props.OnVideoSelect}
      key= {video.etag}
      video={video} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {VideoItems}
    </ul>
  );
};

export default VideoList;
