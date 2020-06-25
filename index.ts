import express = require("express");
import bodyParser = require("body-parser");
import Routes from './src/routes';

const app: express.Application = express();
app.use(bodyParser.json());


app.post("/", function (request, response) {
  const result = Routes(request);
  console.log('request param are', result);
  console.log('result is', result);
  response.send(result);
});
app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
