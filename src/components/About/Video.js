import React from 'react'
import video_bg from '../../assets/images/video_bg.jpg'

const Video = () => {
  return (
    <div className="container">
      <div
        className="kf-video-item kf-image-hover"
        style={{ backgroundImage: `url(${video_bg})` }}
        data-animate="active"
      >
        <iframe
          className="js-video-iframe"
          data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
        />
        <div className="play">
          <i className="fas fa-play" />
        </div>
      </div>
    </div>
  )
}

export default Video
