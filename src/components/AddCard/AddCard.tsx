import { memo, useCallback, useState } from 'react';

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

  const resetForm = () => {
    setShowInput(false);
    setInputValue('');
  };

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
    },
    [setInputValue],
  );

  const handleAdd = useCallback(() => {
    onAdd(inputValue);
    resetForm();
  }, [onAdd, resetForm]);

  return (
    <div>
      {showInput ? (
        <EditWithButton
          ref={inputRef}
          title="Add Card"
          value={inputValue}
          onChange={handleInputChange}
          onConfirm={handleAdd}
        />
      ) : (
        <div className={styles.title} onClick={handleClick}>
          ＋ Add card
        </div>
      )}
    </div>
  );
};

export default memo(AddCard);
