import { useState } from 'react';
import styles from './AddCard.module.css';

type AddCardProps = {
  onAdd: (title: string) => void;
};
const AddCard: React.FC<AddCardProps> = (props) => {
  const { onAdd } = props;
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleAdd = () => {
    onAdd(inputValue);
    resetFort();
  };

  const resetFort = () => {
    setShowInput(false);
    setInputValue('');
  };

  return (
    <span className={styles.AddNewList} onClick={handleClick}>
      {showInput ? (
        <div className={styles.inputWrapper}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <span className={styles.addBtn} onClick={handleAdd}>
            Add List
          </span>
        </div>
      ) : (
        <span className={styles.AddCard} onClick={handleClick}>
          <span>＋ Add another list</span>
        </span>
      )}
    </span>
  );
};

export default AddCard;
