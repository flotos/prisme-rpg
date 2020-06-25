import { createCards } from "utils/responseBuilder";

export default () => {
  const cards = createCards([
    {
      title: "carte 1",
      text: "heya",
      imageUrl:
        "https://storage.googleapis.com/gogowego/c67a70fa51d98b35bdf28cba47ec0f77_card.jpeg",
    },
    {
      title: "carte 2",
      text: "heyo",
      imageUrl:
        "https://storage.googleapis.com/gogowego/c67a70fa51d98b35bdf28cba47ec0f77_card.jpeg",
    },
  ]);

  const responses = {
    stream: [{ text: "ha" }],
    posts: cards,
  };
  return JSON.stringify(responses);
};
