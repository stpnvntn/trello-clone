import React, { useCallback } from 'react';
import { useState } from 'react';
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

type InlineEditProps = {
  onChange: (value: string) => void;
  value: string;
};
const InlineEdit: React.FC<InlineEditProps> = (props) => {
  const { onChange, value } = props;
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [inputRef, showInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleChange = () => {
    onChange(inputValue);
    setShowInput(false);
  };

  const onClick = () => {
    setShowInput(true);
  };

  return (
    <>
      {showInput ? (
        <>
          <input value={inputValue} onChange={handleInputChange} />
          <span onClick={handleChange}>✓</span>
        </>
      ) : (
        <span className="title" onClick={onClick}>
          {value}
        </span>
      )}
    </>
  );
};

export default Card;
