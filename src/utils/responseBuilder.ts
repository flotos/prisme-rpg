export const createCard = ({ title, text, imageUrl, buttons = [] }: ICard) => ({
  type: "card",
  title,
  text,
  image: imageUrl,
  buttons: buttons,
});
export const createCards = (cards: ICard[]) => cards.map(createCard);

export const createButton = ({ text, value }: IButton) => ({ text, value });
