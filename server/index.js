const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 7070;
require("dotenv").config();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
  console.log(process.env.REACT_APP_API_KEY);
});
