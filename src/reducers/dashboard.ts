import { DashboardActions } from 'actions/dashboard';
import { DashboardActionType } from 'actionTypes/dashboard';
import { State } from 'types';

export const initialState: State = {
  lists: {},
};

export default function reducer(state: State = initialState, action: DashboardActions): State {
  switch (action.type) {
    case DashboardActionType.AddList: {
      const { id, title } = action.payload;

      if (!title) {
        return state;
      }

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
    case DashboardActionType.AddCard: {
      const { title, id, listId } = action.payload;

      if (!title) {
        return state;
      }

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
    case DashboardActionType.EditCardTitle: {
      const { newTitle, cardId, listId } = action.payload;

      if (!newTitle) {
        return state;
      }

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
    case DashboardActionType.DeleteCard: {
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
    case DashboardActionType.MoveCard: {
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
    case DashboardActionType.Restore: {
      const state = action.payload;
      return state;
    }
    default:
      return state;
  }
}
