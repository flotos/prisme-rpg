export default () => {
  const responses = {
    stream: [{ text: "ha" }],
    posts: [
      {
        type: "card",
        title: "Carte 1",
        text: "hey",
        image:
          "https://storage.googleapis.com/gogowego/c67a70fa51d98b35bdf28cba47ec0f77_card.jpeg",
        buttons: [],
      },
      {
        type: "card",
        title: "Carte 2",
        text: "heyo",
        image:
          "https://storage.googleapis.com/gogowego/c67a70fa51d98b35bdf28cba47ec0f77_card.jpeg",
        buttons: [],
      },
    ],
  };
  return JSON.stringify(responses);
};
