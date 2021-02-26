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
  onCardTitleChange: (newTitle: string, id: string, listId: string) => void;
};
const List: React.FC<ListProps> = (props) => {
  const { title, onCardAdd, id, cards, onCardTitleChange } = props;

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

  return (
    <span className={styles.List}>
      <h4>{title}</h4>

      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          onTitleChange={handleCardTitleEdit}
        />
      ))}

      <AddCard onAdd={handleCardAdd} />
    </span>
  );
};

export default List;
