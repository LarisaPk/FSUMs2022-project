import Card from '../components/Card';
import memesService from '../services/MemesService';
import { useState, useEffect } from 'react'

function MyMemesPage() {

    const [posts, setPosts] = useState([]);

    const  fetchMyAPI = async ()  => {
        try {const response = await memesService.getMyMemes()
          setPosts(response)
        }
        catch(e) {
        console.log(e)
        }
      } 

    useEffect(() => {
        console.log("useEffect MyMemesPage")
        fetchMyAPI() 
        },[])

    const deletePost = async (id) => {
        console.log('delete',id )
        try {const response = await memesService.deletePost(id)
            if (response === 204) {
                console.log(response)
                fetchMyAPI()
                
            }
            else {
                console.log(response.status)
            }
          }
          catch(e) {
          console.log(e)
          }
    }
    
    return (
        <div className = "MyMemesPage">
            { 
                posts ? posts.map((post) => <Card post={post} key={post.id} deletePost={() => deletePost(post.id)}/>) : <></>           
            }
        </div>
    );
}

export default MyMemesPage;