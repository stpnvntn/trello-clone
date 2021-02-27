import React, { memo } from 'react';
import styles from './EditWithButton.module.css';

type EditWithButtonProps = {
  value: string;
  onChange: React.ChangeEventHandler;
  onConfirm: () => void;
  title: string;
};

const EditWithButton = React.forwardRef<HTMLInputElement, EditWithButtonProps>((props, ref) => {
  const { value, onChange, title, onConfirm } = props;
  return (
    <div className={styles.inputWrapper}>
      <input ref={ref} type="text" value={value} onChange={onChange} />
      <span className={styles.addBtn} onClick={onConfirm}>
        {title}
      </span>
    </div>
  );
});

export default memo(EditWithButton);
