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

export type ListActions = AddList;
