import { useEffect, useRef } from 'react';

export default function useAutofocusableAutofocusableConditionalInput(showInput: boolean) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  return inputRef;
}
