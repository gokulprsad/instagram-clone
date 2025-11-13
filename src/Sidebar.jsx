import React from 'react'
import instaText from './assets/insta-text.webp'

function Sidebar() {
  return (
    <div className='position-fixed top-0 z-index: 1020;'>
      <div className='d-flex flex-column m-3 gap-4 '>
            <img className='size' src={instaText} alt="" />
            <div><i className="bi bi-house-door me-2"></i>Home</div>
            <div><i className="bi bi-search me-2"></i>Search</div>
            <div><i className="bi bi-compass me-2"></i>Explore</div>
            <div><i className="bi bi-play-btn me-2"></i>Reels</div>
            <div><i className="bi bi-chat-dots me-2"></i>Messages</div>
            <div><i className="bi bi-heart me-2"></i>Notifications</div>
            <div><i className="bi bi-plus-square me-2"></i>Create</div>
            <div><i className="bi bi-person-circle me-2"></i>Profile</div>

      </div>
      <div className='position-fixed d-flex flex-column bottom-0 m-3 gap-4'>
            <div><i className="bi bi-threads"></i>Threads</div>
            <div><i className="bi bi-list"></i>More</div>   
      </div>
    </div>
  )
}

export default Sidebar
