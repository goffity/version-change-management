const functions = require("@google-cloud/functions-framework");

functions.http("hello_function", (req, res) => {
  res.status(200).send({
    message: "OK",
  });
});
