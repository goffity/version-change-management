const functions = require("@google-cloud/functions-framework");

functions.http("first_function", (req, res) => {
  res.status(200).send({
    message: "OK",
  });
});
