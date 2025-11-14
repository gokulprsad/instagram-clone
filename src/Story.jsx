import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Story = () => {


  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/story')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((error) => console.error('Error fetching stories:', error));
  })
  let tot = 0;

  return (
    <div>
      <div className='d-none'>

      {tot = stories.length }
      </div>
      {stories.length > 0 ? (
        <div className='story'> 
         {stories.map((story)=>{
          return(
            <div key={story.id } onClick={()=>navigate(`/story/${story.id}/${tot}`)}>
              <img className='rounded-circle story-profile stories-container' src={story.user.profile_pic} alt="profile_pic" />
              <p>{story.user.username}</p>
            </div>
          )
         })}
        </div>
      ):(
        <p>loading</p>
      )}
    </div>
  )
}

export default Story
