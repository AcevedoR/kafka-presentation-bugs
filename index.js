const express = require("express");
const app = express();
const port = 8080;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get("/lag-elo", (req, res) => {
  const NB_RANDOM_EVENT = 500;
  const NB_STATIC_EVENT = 400;
  const TIME_BETWEEN_EVENTS = 500;

  const now = Date.now();
  const data = Array(NB_RANDOM_EVENT)
    .fill(0)
    .map((_, i) => ({
      timestamp:
        now - NB_STATIC_EVENT * TIME_BETWEEN_EVENTS - TIME_BETWEEN_EVENTS * i,
      value: getRandomInt(15, 25),
    }))
    .concat(
      Array(NB_STATIC_EVENT)
        .fill(0)
        .map((_, i) => ({
          timestamp: now - TIME_BETWEEN_EVENTS * i,
          value: 40,
        }))
    );
  res.send(data);
});

app.get("/logs-error", (req, res) => {
  const NB_RANDOM_EVENT = 500;
  const NB_STATIC_EVENT = 100;
  const TIME_BETWEEN_EVENTS = 20000;

  const now = Date.now();
  const data = Array(NB_RANDOM_EVENT)
    .fill(0)
    .map((_, i) => ({
      timestamp:
        now - NB_STATIC_EVENT * TIME_BETWEEN_EVENTS - TIME_BETWEEN_EVENTS * i,
      value: getRandomInt(5, 10),
    }))
    .concat(
      Array(NB_STATIC_EVENT)
        .fill(0)
        .map((_, i) => ({
          timestamp: now - TIME_BETWEEN_EVENTS * i,
          value: 0,
        }))
    );
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
