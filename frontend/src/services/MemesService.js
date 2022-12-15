import axios from "axios";
const baseUrl = "http://localhost:3001/api";

//fetches data for "My Memes" page
const getMyMemes = async () => {
  const response = await axios.get(`${baseUrl}/posts`);
  return response.data;
};

//delete single post
const deletePost = async (id) => {
  const response = await axios.delete(`${baseUrl}/posts/${id}`);
  return response.status;
};

const memesService = {
  getMyMemes,
  deletePost,
};

export default memesService;
