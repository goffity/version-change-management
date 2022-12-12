const express = require("express");
const app = express();

app.get("/temp", function (req, res) {
  res.status(200).send("OK");
});
app.get("/", (req, res) => {
  res.status(200).send({
    message: "OK",
  });
});

app.listen(3000, () => {
  console.log(`APp listening on port 3000`);
});
