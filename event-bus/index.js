const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// * @desc      POST endpoint to watch incoming events
// * @route     POST /events
// * @access    Public
app.post("/events", (req, res) => {
  // Take whatever is inside on the req.body of that event and send that data to our running services
  const event = req.body;

  // Now we have our event, we will make a post request to our other running services
  // * Posts
  axios.post("http://localhost:4000/events", event);
  // * Comments
  axios.post("http://localhost:4001/events", event);
  // * Query Services
  axios.post("http://localhost:4002/events", event);

  // We send then that data
  res.send({ status: "OK" });
});

// * Listening PORT
app.listen(4005, () => {
  console.log("Listening on port 4005");
});
