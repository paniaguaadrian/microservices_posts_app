const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// To generate a new ID  that we are going to asign  to a posts that user try to create.
const { randomBytes } = require("crypto");

const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Variable to storage created posts
const posts = {};

// @desc      Get all posts created
app.get("/posts", (req, res) => {
  res.send(posts);
});

// @desc      Create a post
app.post("/posts", async (req, res) => {
  // Create a random ID
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  // ? Emit an event (EVENT_BUS)
  await axios.post("http://localhost:4005/events", {
    // ? The event that we want to send it over
    type: "PostCreated",
    // ? The data that we want from that event, and the data that we want to send
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

// ! New post request handeler to send our events
app.post("/events", (req, res) => {
  console.log("Reveived event", req.body.type);

  res.send({});
});

// Listening PORT
app.listen(4000, () => {
  console.log("Listening on  4000");
});
