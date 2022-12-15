const express = require("express");
const app = express();

app.use(express.json());

// CORS fix (temporary set to all)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});

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
];

const generateId = () => {
  const maxId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) : 0;
  return maxId + 1;
};

// Get a single post
app.get("/api/posts/:id", (request, response) => {
  const id = Number(request.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    response.status(200).json(post);
  } else {
    response.status(404).end();
  }
});

// Get all posts
app.get("/api/posts", (request, response) => {
  response.status(200).json(posts);
});

// Delete a single post
app.delete("/api/posts/:id", (request, response) => {
  const id = Number(request.params.id);
  posts = posts.filter((post) => post.id !== id);
  response.status(204).end;
});

// Add a single post
app.post("/api/posts", (request, response) => {
  const body = request.body;

  if (!body) {
    return response.status(400).json({
      error: "content is missing",
    });
  }

  const post = {
    id: generateId(),
    ...request.body,
  };

  posts.push(post);
  return response.status(201).json(post);
});

// Replace the entire post with the request data
app.put("/api/posts/:id", (request, response) => {
  let tempId = Number(request.params.id);

  let post = {
    id: tempId,
    ...request.body,
  };

  for (p of posts) {
    if (p.id === tempId) {
      posts.splice(p, 1, post);
      return response.status(200).json({ message: "Success" });
    }
  }
  return response.status(404).json({ message: "Not found" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
