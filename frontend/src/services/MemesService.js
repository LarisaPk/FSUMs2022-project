import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

//fetches data for "My Memes" page
const getMyMemes = async ()=> {
    const response = await axios.get(`${baseUrl}/posts`)
    return response.data
  }

const memesService = {
    getMyMemes
};

export default memesService;  