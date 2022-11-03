import Card from '../components/Card';
import memesService from '../services/MemesService';
import { useState, useEffect } from 'react'

function MyMemesPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const  fetchMyAPI = async ()  => {
          try {const response = await memesService.getMyMemes()
            setPosts(response)
            console.log(response)
          }
          catch(e) {
          console.log(e)
          }
        } 
        fetchMyAPI()   
        }, [])

    console.log(posts, "posts")
    
    return (
        <div className = "MyMemesPage">
            { 
                posts ? posts.map((post) => <Card post={post} key={post.id}/>) : <></>           
            }
        </div>
    );
}

export default MyMemesPage;