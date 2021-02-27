import React, { memo, useCallback } from 'react';

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

  const handleCardDelete = () => {
    onCardDelete(id);
  };

  const handleDragStart = () => {
    onDragStart(id);
  };

  const handleDragEnd = () => {
    onDragEnd();
  };

  return (
    <div className={styles.Card} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className={styles.title}>
        <InlineEdit value={title} onChange={handleTitleChange} />
        <span className={styles.delete} onClick={handleCardDelete}>
          ✕
        </span>
      </div>
      {description && <span>description</span>}
    </div>
  );
};

export default memo(Card);
