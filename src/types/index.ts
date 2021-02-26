export type State = {
  lists: Lists;
};

export type ListObj = {
  title: string;
  id: string;
  cards: CardObj[];
};

export type CardObj = {
  id: string;
  title: string;
  description?: string;
};

export type Lists = {
  [key: string]: ListObj;
};
