import { memo, useState } from 'react';
import useAutofocusableAutofocusableConditionalInput from 'utils/react/useAutofocusableAutofocusableConditionalInput';

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

export default memo(InlineEdit);
