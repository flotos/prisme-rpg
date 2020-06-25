import test from "./intentHandlers/test";

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
    case "default":
      return null;
  }
};
