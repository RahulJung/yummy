const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database");
  } else {
    console.log("Connected to the database");
  }
});

const getReviewsByID = (Id, callback) => {
  connection.query("SELECT * FROM reviews WHERE id=?", [Id], (err, data) => {
    if (err) {
      console.log("problem getting all reviews in query");
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const postReview = (id, cName, rating, review, callback) => {
  connection.query(
    `INSERT INTO reviews (id, cName, rating, review) VALUES ('${id}','${cName}', '${rating}','${review}')`,
    (err, data) => {
      if (err) {
        console.log("problem posting reviews in query");
        callback(err, null);
      } else {
        callback(null, data);
      }
    }
  );
};

module.exports = { postReview, getReviewsByID };
