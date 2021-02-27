import { useState } from 'react';

import EditWithButton from 'components/EditWithButton';
import useAutofocusableAutofocusableConditionalInput from 'utils/react/useAutofocusableAutofocusableConditionalInput';

import styles from './AddCard.module.css';

type AddCardProps = {
  onAdd: (title: string) => void;
};
const AddCard: React.FC<AddCardProps> = (props) => {
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
    setInputValue('');
  };

  return (
    <span className={styles.AddNewList}>
      {showInput ? (
        <EditWithButton
          ref={inputRef}
          title="Add Card"
          value={inputValue}
          onChange={handleInputChange}
          onConfirm={handleAdd}
        />
      ) : (
        <span className={styles.AddCard} onClick={handleClick}>
          <span>＋ Add card</span>
        </span>
      )}
    </span>
  );
};

export default AddCard;
