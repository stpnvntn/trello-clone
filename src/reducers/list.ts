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
    default:
      return state;
  }
}
