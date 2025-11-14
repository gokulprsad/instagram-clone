import React, { use } from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

export default function StoryPage() {
    const navigate = useNavigate();
    const {id , tot} = useParams();
    const [story , setStory] = useState(null);


    useEffect(() =>{
        fetch(`http://localhost:3000/story/${id}`)
        .then((res) => res.json())
        .then((data) => setStory(data)) 
        .catch((error) => console.error('Error fetching story:', error));

        if(id < 1 || id > tot){
            navigate('/');
        }

    },[id])
    return (
        <div>
            {/* {tot = story.length} */}
        {story ? (<div className="d-flex justify-content-center align-items-center vh-100">
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
            <img className='vh-100' src={story.image} alt="story" />
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i  className="bi bi-arrow-right-circle-fill"></i></Link>

        </div>):(<div>loading</div>) }
    </div>
  )
}
