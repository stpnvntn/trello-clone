import { v4 as uuidv4 } from 'uuid';

import { ListActionType } from 'actionTypes/list';
import { Action } from 'types/Action';

type AddList = Action<ListActionType.AddList, { title: string; id: string }>;
export function addList(title: string): AddList {
  return {
    type: ListActionType.AddList,
    payload: {
      title,
      id: uuidv4(),
    },
  };
}

type AddCard = Action<ListActionType.AddCard, { title: string; id: string; listId: string }>;
export function addCard(title: string, listId: string): AddCard {
  return {
    type: ListActionType.AddCard,
    payload: {
      title,
      id: uuidv4(),
      listId,
    },
  };
}

type EditCardTitle = Action<
  ListActionType.EditCardLabel,
  { newTitle: string; cardId: string; listId: string }
>;
export function editCardTitle(newTitle: string, cardId: string, listId: string): EditCardTitle {
  return {
    type: ListActionType.EditCardLabel,
    payload: {
      newTitle,
      cardId,
      listId,
    },
  };
}

export type ListActions = AddList | AddCard | EditCardTitle;
