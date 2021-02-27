import { useState } from 'react';

import EditWithButton from 'components/EditWithButton';
import useAutofocusableAutofocusableConditionalInput from 'utils/react/useAutofocusableAutofocusableConditionalInput';

import styles from './AddNewList.module.css';

type AddNewListProps = {
  onAdd: (title: string) => void;
};
const AddNewList: React.FC<AddNewListProps> = (props) => {
  const { onAdd } = props;
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useAutofocusableAutofocusableConditionalInput(showInput);

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
    <span className={styles.AddNewList}>
      {showInput ? (
        <EditWithButton
          ref={inputRef}
          title="Add list"
          value={inputValue}
          onChange={handleInputChange}
          onConfirm={handleAdd}
        />
      ) : (
        <span className={styles.AddNewList} onClick={handleClick}>
          <span>＋ Add another list </span>
        </span>
      )}
    </span>
  );
};

export default AddNewList;
