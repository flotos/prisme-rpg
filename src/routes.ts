import test from "./intentHandlers/test";
import travel from "./intentHandlers/travel";

export default (request: IPrismeRequest) => {
  const {
    body: {
      intent: { inputs = {}, name = "" } = {},
      fulfillment = {},
      query = "",
    } = {},
  } = request;

  console.log("got request", name, fulfillment, query);

  switch (name) {
    case "test":
      return test();
    case "travel":
      return travel();
    case "default":
      return null;
  }
};
