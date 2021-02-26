import { useState } from 'react';
import styles from './AddNewList.module.css';

type AddNewListProps = {
  onAdd: (title: string) => void;
};
const AddNewList: React.FC<AddNewListProps> = (props) => {
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
    setInputValue('121');
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
        <span className={styles.AddNewList} onClick={handleClick}>
          <span>＋ Add another list </span>
        </span>
      )}
    </span>
  );
};

export default AddNewList;
