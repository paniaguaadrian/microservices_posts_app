const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ! Put together our 2 routes handlers GET /posts POST /events
// * @desc      Get the /post handler
// * @route     GET /posts
// * @access    Public
app.get("/posts", (req, res) => {});

// * @desc      Post the event
// * @route     POST /events
// * @access    Public
// ! Endpoint to recive events from the event bus
app.post("/events", (req, res) => {});

app.listen(4002, () => {
  console.log("Listening on port 4002");
});
