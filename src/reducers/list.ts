import { ListActions } from 'actions/list';
import { ListActionType } from 'actionTypes/list';
import { State } from 'types';

export const initialState: State = {
  lists: {},
};

export default function reducer(state: State = initialState, action: ListActions): State {
  switch (action.type) {
    case ListActionType.AddList: {
      const { id, title } = action.payload;
      return {
        ...state,
        lists: {
          ...state.lists,
          [id]: {
            title,
            id,
            cards: [],
          },
        },
      };
    }
    case ListActionType.AddCard: {
      const { title, id, listId } = action.payload;

      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            cards: [...state.lists[listId].cards, { title, id }],
          },
        },
      };
    }
    case ListActionType.EditCardLabel: {
      const { newTitle, cardId, listId } = action.payload;

      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            cards: state.lists[listId].cards.map((card) => {
              if (cardId === card.id) {
                return { ...card, title: newTitle };
              }
              return card;
            }),
          },
        },
      };
    }
    case ListActionType.DeleteCard: {
      const { cardId, listId } = action.payload;

      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            cards: state.lists[listId].cards.filter(({ id }) => id !== cardId),
          },
        },
      };
    }
    case ListActionType.MoveCard: {
      const { cardId, originListId, targetListId } = action.payload;

      if (originListId === targetListId) {
        return state;
      }

      return {
        ...state,
        lists: {
          ...state.lists,
          [targetListId]: {
            ...state.lists[targetListId],
            cards: [
              ...state.lists[targetListId].cards,
              state.lists[originListId].cards.find(({ id }) => id === cardId)!,
            ],
          },
          [originListId]: {
            ...state.lists[originListId],
            cards: state.lists[originListId].cards.filter(({ id }) => id !== cardId),
          },
        },
      };
    }
    case ListActionType.Restore: {
      const state = action.payload;
      return state;
    }
    default:
      return state;
  }
}
