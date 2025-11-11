import React, { useState, useEffect } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
            <div className='d-flex' key={post.id}>
                <img className='rounded-circle profile-pic'src={post.user.profile_pic} alt="" />
              <p>{post.user.username}</p>
              {console.log(posts)}
            </div>
              <img className='post' src={post.image} alt="" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>
                  {post.likes}
                </b>
              </div>
              <p>{post.caption}</p>
              </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Posts
