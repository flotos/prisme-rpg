import { createCards } from "utils/responseBuilder";

export default () => {
  const cards = createCards([
    {
      title: "Sentier",
      text: "Il est plus sûr de poursuivre le sentier sans s'égarer",
      imageUrl: "https://jooinn.com/images1280_/forest-path-6.jpg",
    },
    {
      title: "Cabane",
      text:
        "Vous apercevez une cabane à votre droite. Risqueriez-vous de vous y aventurer ?",
      imageUrl:
        "https://i.pinimg.com/originals/57/3b/d9/573bd93b6e9d71833e1bb3976457bd94.jpg",
    },
  ]);

  const responses = {
    stream: [{ text: "Plusieurs directions s'offrent à vous :" }],
    posts: cards,
  };
  return JSON.stringify(responses);
};
