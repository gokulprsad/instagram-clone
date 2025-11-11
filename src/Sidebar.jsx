import React from 'react'
import instaText from './assets/insta-text.webp'

function Sidebar() {
  return (
    <div>
      <div className='d-flex flex-column m-3 gap-4 '>
            <img className='size' src={instaText} alt="" />
            <div><i class="bi bi-house-door"></i>Home</div>
            <div><i class="bi bi-search"></i>Search</div>
            <div><i class="bi bi-compass"></i>Explore</div>
            <div><i class="bi bi-play-btn"></i>Reels</div>
            <div><i class="bi bi-chat-dots"></i> Messages</div>
            <div><i class="bi bi-heart"></i>Notifications</div>
            <div><i class="bi bi-plus-square"></i>Create</div>
            <div><i class="bi bi-person-circle"></i>Profile</div>
      </div>
      <div className='position-fixed d-flex flex-column bottom-0 m-3 gap-4'>
            <div><i class="bi bi-threads"></i>Threads</div>
            <div><i class="bi bi-list"></i>More</div>   
      </div>
    </div>
  )
}

export default Sidebar
