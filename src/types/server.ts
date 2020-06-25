interface IPrismeRequest {
  body: {
    intent: {
      inputs: any;
      name: string;
    };
    fulfillment: any;
    query: string;
  };
}
