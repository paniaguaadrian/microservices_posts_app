const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

// @desc      POST endpoint to watch incoming events
app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  // axios.post("http://localhost:4000/events", event);
  // axios.post("http://localhost:4001/events", event);
  // axios.post("http://localhost:4002/events", event);
  // axios.post("http://localhost:4003/events", event);

  // ! In case that I need  ...
  // Handler errors if the version of node make problems to it.
  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });
  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  // We send then that data
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

// Listening PORT
app.listen(4005, () => {
  console.log("Listening on port 4005");
});
