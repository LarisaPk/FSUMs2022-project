const express = require('express')
const app = express()

app.use(express.json())

let posts = [
  {
    id: 1,
    top_text: "1 Text on the top",
    bottom_text: "1 Text on the bottom",
    image: "https://api.memegen.link/images/ams.png",
  },
  {
    id: 2,
    top_text: "2 Text on the top",
    bottom_text: "2 Text on the bottom",
    image: "https://api.memegen.link/images/agnes.png",
  },
  {
    id: 3,
    top_text: "3 Text on the top",
    bottom_text: "3 Text on the bottom",
    image: "https://api.memegen.link/images/ants.png",
  },
]

// get a single post
app.get('/api/posts/:id', (request, response) => {
  const id = Number(request.params.id)
  const post = posts.find(post => post.id === id) 
  
  if (post) {
    response.json(post) 
  }
  else {
    response.status(404).end()
  }
})

// get all posts
app.get('/api/posts', (request, response) => {
    response.json(posts) 
})

// delete a single post
app.delete('/api/posts/:id', (request, response) => {
  const id = Number(request.params.id)
  posts = posts.filter(post => post.id !== id)
  response.status(204).end()
})

// add a single post
app.post('/api/posts', (request, response) => {
  const post = request.body
  console.log(typeof post)
  response.json(post)
})

  
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})