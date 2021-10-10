import React, { Component } from 'react';
import ReactPlayer from 'react-player'

export default class DestinationVideo extends Component {
    
  render() {
    return (
      <div className='wrapper'> 
      <div className='youtube-box'></div>

      <ReactPlayer className='video' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls />
      </div>
      
    );
  }
}
