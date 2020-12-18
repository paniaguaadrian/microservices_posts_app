const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};
// TODO QUICK EXAMPLE OF A POST OBJECT
// post1 === {
//     "asjdb12",
//     title: "post title",
//     comments: [
//         {id: "akjsbdnakjs", comment: "comment"}
//     ]
// }

// ! Put together our 2 routes handlers GET /posts POST /events
// * @desc      Get all the posts
// * @route     GET /posts
// * @access    Public
app.get("/posts", (req, res) => {
  res.send(posts);
});

// * @desc      Post the event
// * @route     POST /events
// * @access    Public
// ! Endpoint to recive events from the event bus
app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content });
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => {
  console.log("Listening on port 4002");
});
