import { memo, useState } from 'react';

import useAutofocusableAutofocusableConditionalInput from 'utils/react/useAutofocusableAutofocusableConditionalInput';

import styles from './InlineEdit.module.css';

type InlineEditProps = {
  onChange: (value: string) => void;
  value: string;
};
const InlineEdit: React.FC<InlineEditProps> = (props) => {
  const { onChange, value } = props;
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useAutofocusableAutofocusableConditionalInput(showInput);

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
          <input ref={inputRef} value={inputValue} onChange={handleInputChange} />
          <span className={styles.confirm} onClick={handleChange}>
            ✓
          </span>
        </>
      ) : (
        <span className={styles.title} title={value} onClick={onClick}>
          {value}
        </span>
      )}
    </>
  );
};

export default memo(InlineEdit);
