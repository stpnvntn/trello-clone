import { useEffect, useReducer, useState } from 'react';

import Header from 'components/Header';
import AddNewList from 'components/AddNewList';
import List from 'components/List';
import listReducer, { initialState as listInitialState } from 'reducers/list';
import * as ListActions from 'actions/list';

import styles from './Board.module.css';
import { BoardService } from './board.service';

const Board: React.FC = () => {
  const [state, dispatch] = useReducer(listReducer, listInitialState);
  const [cardInDrag, setCardInDrag] = useState<{ cardId: string; listId: string } | null>(null);

  useEffect(() => {
    const state = BoardService.getState();
    if (state) {
      dispatch(ListActions.restoreState(state));
    }
  }, []);

  useEffect(() => {
    BoardService.saveState(state);
  }, [state]);

  const handleAddNewList = (title: string) => {
    dispatch(ListActions.addList(title));
  };

  const handleAddCard = (title: string, listId: string) => {
    dispatch(ListActions.addCard(title, listId));
  };

  const handleCardTitleChange = (newTitle: string, cardId: string, listId: string) => {
    dispatch(ListActions.editCardTitle(newTitle, cardId, listId));
  };

  const handleCardDelete = (cardId: string, listId: string) => {
    dispatch(ListActions.deleteCard(cardId, listId));
  };

  const handleDragStart = (cardId: string, listId: string) => {
    setCardInDrag({ cardId, listId });
  };

  const onDragEnd = () => {
    setCardInDrag(null);
  };

  const handleOnDrop = (listId: string) => {
    if (!cardInDrag) {
      return;
    }

    dispatch(
      ListActions.moveCard({
        cardId: cardInDrag.cardId,
        originListId: cardInDrag.listId,
        targetListId: listId,
      }),
    );
  };

  return (
    <div className={styles.Board}>
      <Header />

      <div className={styles.dashboard}>
        {Object.entries(state.lists).map(([id, list]) => (
          <List
            key={id}
            title={list.title}
            cards={list.cards}
            id={id}
            onCardAdd={handleAddCard}
            onCardTitleChange={handleCardTitleChange}
            onCardDelete={handleCardDelete}
            onDragStart={handleDragStart}
            onDragEnd={onDragEnd}
            onDrop={handleOnDrop}
          />
        ))}
        <AddNewList onAdd={handleAddNewList} />
      </div>
    </div>
  );
};

export default Board;
