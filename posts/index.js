const express = require("express");
const bodyParser = require("body-parser");

// To generate a new ID  that we are going to asign  to a posts that user try to create.
const { randomBytes } = require("crypto");

const app = express();
app.use(bodyParser.json());

// Variable to storage created posts
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  // Create a random ID
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on  4000");
});
