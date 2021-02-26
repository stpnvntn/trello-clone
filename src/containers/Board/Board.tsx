import { useReducer } from 'react';

import Header from 'components/Header';
import AddNewList from 'components/AddNewList';
import List from 'components/List';
import listReducer, { initialState as listInitialState } from 'reducers/list';
import * as ListActions from 'actions/list';

import styles from './Board.module.css';

const Board: React.FC = () => {
  const [state, dispatch] = useReducer(listReducer, listInitialState);

  const handleAddNewList = (title: string) => {
    dispatch(ListActions.addList(title));
  };

  return (
    <div className={styles.Board}>
      <Header />

      <div className={styles.dashboard}>
        {Object.entries(state.lists).map(([id, list]) => (
          <List key={id} title={list.title} cards={list.cards} id={id} />
        ))}
        <AddNewList onAdd={handleAddNewList} />
      </div>
    </div>
  );
};

export default Board;
