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
    default:
      return state;
  }
}
