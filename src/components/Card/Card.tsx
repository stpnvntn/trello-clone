import React, { useCallback } from 'react';

import InlineEdit from 'components/InlineEdit';

import styles from './Card.module.css';

type CardProps = {
  title: string;
  id: string;
  description?: string;
  onTitleChange: (newTitle: string, id: string) => void;
  onCardDelete: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
};
const Card: React.FC<CardProps> = (props) => {
  const { title, description, id, onTitleChange, onCardDelete, onDragStart, onDragEnd } = props;

  const handleTitleChange = useCallback(
    (newTitle: string) => {
      onTitleChange(newTitle, id);
    },
    [onTitleChange, id],
  );

  const handleCardDelete = useCallback(() => {
    onCardDelete(id);
  }, [onCardDelete, id]);

  const handleDragStart = useCallback(() => {
    onDragStart(id);
  }, [onDragStart, id]);

  const handleDragEnd = useCallback(() => {
    onDragEnd();
  }, [onDragStart]);

  return (
    <div className={styles.Card} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div>
        <InlineEdit value={title} onChange={handleTitleChange} />
        <span onClick={handleCardDelete}>✕</span>
      </div>
      {description && <span>description</span>}
    </div>
  );
};

export default Card;
