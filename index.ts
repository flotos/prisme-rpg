import express = require("express");
import bodyParser from "body-parser";

const app: express.Application = express();
app.use(bodyParser.json());


app.post("/", function (request) {
  const { body: { intent: { inputs = {}, name = "" } = {}, fulfillment = {}, query = '' } = {} } = request;
  console.log('got request', name, fulfillment, query);
  return 0;
});
app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
