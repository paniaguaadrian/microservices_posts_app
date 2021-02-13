const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Variable to store created comments.
const commentsByPostId = {};

// @desc      Get all comments for that postID
app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// @desc      Create a comment for that postID
app.post("/posts/:id/comments", async (req, res) => {
  // Create a random ID
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  // That's the comment itself.
  comments.push({ id: commentId, content, status: "pending" });

  commentsByPostId[req.params.id] = comments;

  // ? Emit an event (EVENT_BUS)
  await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
      status: "pending",
    },
  });

  res.status(201).send(comments);
  return;
});

// ! New post request handeler to send our events
app.post("/events", (req, res) => {
  console.log("Reveived event", req.body.type);

  res.send({});
});

// Listening PORT
app.listen(4001, () => {
  console.log("Listening on 4001");
});
