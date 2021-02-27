import { memo, useCallback, useState } from 'react';

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

  const resetForm = () => {
    setShowInput(false);
    setInputValue('');
  };

  const handleClick = () => {
    setShowInput(true);
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
        <div className={styles.title} onClick={handleClick}>
          ＋ Add another list
        </div>
      )}
    </span>
  );
};

export default memo(AddNewList);
