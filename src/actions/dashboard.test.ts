import { DashboardActionType } from 'actionTypes/dashboard';
import * as DashboardActions from './dashboard';

const FAKE_UNIQUE_ID = 'FAKE_UNIQUE_ID';

jest.mock('uuid', () => ({
  v4: () => FAKE_UNIQUE_ID,
}));

describe('dashboard actions', () => {
  describe('addList', () => {
    it('creates correct action', () => {
      const title = 'awesome title';

      const actual = DashboardActions.addList(title);

      expect(actual).toEqual({
        type: DashboardActionType.AddList,
        payload: { title, id: FAKE_UNIQUE_ID },
      });
    });
  });

  describe('addCard', () => {
    it('creates correct action', () => {
      const title = 'awesome title';
      const listId = 'list-id';

      const actual = DashboardActions.addCard(title, listId);

      expect(actual).toEqual({
        type: DashboardActionType.AddCard,
        payload: { title, id: FAKE_UNIQUE_ID, listId },
      });
    });
  });

  describe('editCardTitle', () => {
    it('creates correct action', () => {
      const newTitle = 'new awesome title';
      const listId = 'list-id';
      const cardId = 'card-id';

      const actual = DashboardActions.editCardTitle(newTitle, cardId, listId);

      expect(actual).toEqual({
        type: DashboardActionType.EditCardTitle,
        payload: { newTitle, cardId, listId },
      });
    });
  });

  describe('deleteCard', () => {
    it('creates correct action', () => {
      const listId = 'list-id';
      const cardId = 'card-id';

      const actual = DashboardActions.deleteCard(cardId, listId);

      expect(actual).toEqual({
        type: DashboardActionType.DeleteCard,
        payload: { cardId, listId },
      });
    });
  });

  describe('moveCard', () => {
    it('creates correct action', () => {
      const originListId = 'list-id-1';
      const targetListId = 'list-id-2';
      const cardId = 'card-id';

      const actual = DashboardActions.moveCard({
        cardId,
        originListId,
        targetListId,
      });

      expect(actual).toEqual({
        type: DashboardActionType.MoveCard,
        payload: {
          cardId,
          originListId,
          targetListId,
        },
      });
    });
  });
});
