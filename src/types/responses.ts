interface ICard {
  title: string;
  text: string;
  imageUrl: string;
  buttons?: IButton[];
}

interface IButton {
  text: string;
  value: string;
}
