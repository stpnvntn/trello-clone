import { v4 as uuidv4 } from 'uuid';

import { DashboardActionType } from 'actionTypes/dashboard';
import { Action } from 'types/Action';
import { State } from 'types';

type AddList = Action<DashboardActionType.AddList, { title: string; id: string }>;
export function addList(title: string): AddList {
  return {
    type: DashboardActionType.AddList,
    payload: {
      title,
      id: uuidv4(),
    },
  };
}

type AddCard = Action<DashboardActionType.AddCard, { title: string; id: string; listId: string }>;
export function addCard(title: string, listId: string): AddCard {
  return {
    type: DashboardActionType.AddCard,
    payload: {
      title,
      id: uuidv4(),
      listId,
    },
  };
}

type EditCardTitle = Action<
  DashboardActionType.EditCardTitle,
  { newTitle: string; cardId: string; listId: string }
>;
export function editCardTitle(newTitle: string, cardId: string, listId: string): EditCardTitle {
  return {
    type: DashboardActionType.EditCardTitle,
    payload: {
      newTitle,
      cardId,
      listId,
    },
  };
}

type DeleteCard = Action<DashboardActionType.DeleteCard, { cardId: string; listId: string }>;
export function deleteCard(cardId: string, listId: string): DeleteCard {
  return {
    type: DashboardActionType.DeleteCard,
    payload: {
      cardId,
      listId,
    },
  };
}

type MoveCard = Action<
  DashboardActionType.MoveCard,
  { cardId: string; originListId: string; targetListId: string }
>;
export function moveCard(args: {
  cardId: string;
  originListId: string;
  targetListId: string;
}): MoveCard {
  return {
    type: DashboardActionType.MoveCard,
    payload: {
      ...args,
    },
  };
}

type RestoreState = Action<DashboardActionType.Restore, State>;
export function restoreState(state: State): RestoreState {
  return {
    type: DashboardActionType.Restore,
    payload: state,
  };
}

export type DashboardActions =
  | AddList
  | AddCard
  | EditCardTitle
  | DeleteCard
  | MoveCard
  | RestoreState;
