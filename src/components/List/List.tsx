import { CardObj } from 'types';
import AddCard from 'components/AddCard';
import Card from 'components/Card';

import styles from './List.module.css';
import { useCallback } from 'react';

type ListProps = {
  title: string;
  id: string;
  cards: CardObj[];
  onCardAdd: (title: string, listId: string) => void;
  onCardTitleChange: (newTitle: string, cardId: string, listId: string) => void;
  onCardDelete: (cardId: string, listId: string) => void;
  onDragStart: (cardId: string, listId: string) => void;
  onDragEnd: () => void;
  onDrop: (listId: string) => void;
};
const List: React.FC<ListProps> = (props) => {
  const {
    title,
    onCardAdd,
    id,
    cards,
    onCardTitleChange,
    onCardDelete,
    onDragStart,
    onDragEnd,
    onDrop,
  } = props;

  const handleCardAdd = useCallback(
    (title: string) => {
      onCardAdd(title, id);
    },
    [id, onCardAdd],
  );

  const handleCardTitleEdit = useCallback(
    (newTitle: string, cardId: string) => {
      onCardTitleChange(newTitle, cardId, id);
    },
    [onCardTitleChange, id],
  );

  const handleCardDelete = useCallback(
    (cardId: string) => {
      onCardDelete(cardId, id);
    },
    [onCardDelete, id],
  );

  const handleDragStart = useCallback(
    (cardId: string) => {
      onDragStart(cardId, id);
    },
    [onDragStart, id],
  );

  const handleDragEnd = useCallback(() => {
    onDragEnd();
  }, [onDragEnd]);

  const handleOnDrop = useCallback(() => {
    onDrop(id);
  }, [onDragEnd, id]);

  return (
    <span
      className={styles.List}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={handleOnDrop}
    >
      <h4 className={styles.title} title={title}>
        {title}
      </h4>

      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          onTitleChange={handleCardTitleEdit}
          onCardDelete={handleCardDelete}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      ))}

      <AddCard onAdd={handleCardAdd} />
    </span>
  );
};

export default List;
