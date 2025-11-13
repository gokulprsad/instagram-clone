import React, { use } from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';

export default function StoryPage() {
    const {id} = useParams();
    const [story , setStory] = useState(null);

    useEffect(() =>{
        fetch(`http://localhost:3000/story/${id}`)
        .then((res) => res.json())
        .then((data) => setStory(data))
        .catch((error) => console.error('Error fetching story:', error));

    },[])
    return (
        <div>
        {story ? (<div>
            <img src={story.image} alt="story" />
        </div>):(<div>loading</div>) }
    </div>
  )
}
