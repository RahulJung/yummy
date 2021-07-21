const express = require("express");
const path = require("path");
const axios = require("axios");
const { postReview, getReviewsByID } = require("../database/query");
const app = express();
const port = 7070;
require("dotenv").config();

const { key } = require("../api");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.get("/foo", (req, res) => {
  // console.log(req.query.lat);
  console.log("hello", key);
  const lat = req.query.lat;
  const lng = req.query.lng;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&types=restaurant&key=${key}`
    )
    .then((response) => {
      // console.log(response.data.results);
      res.send(response.data.results);
    })
    .catch((err) => console.log(err));
});

app.get("/reviews/:id", (req, res) => {
  //console.log(req.params);
  getReviewsByID(req.params.id, (err, data) => {
    if (err) {
      console.log("problem getting tasks from server");
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post("/add", (req, res) => {
  console.log("Sucessfully posted data", req.body);
  postReview(
    req.body.id,
    req.body.cName,
    req.body.rating,
    req.body.review,
    (err, data) => {
      if (err) {
        console.log("problem getting tasks from server");
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
  console.log(process.env.REACT_APP_API_KEY);
});
