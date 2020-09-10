const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 7070;
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/foo", (req, res) => {
  // console.log(req.query.lat);
  const lat = req.query.lat;
  const lng = req.query.lng;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&types=restaurant&key=AIzaSyDWflt-t3VjsLFlxPueOqMZikZLGV_pL2A`
    )
    .then((response) => {
      // console.log(response.data.results);
      res.send(response.data.results);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
  console.log(process.env.REACT_APP_API_KEY);
});
