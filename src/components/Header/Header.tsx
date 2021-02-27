import { memo } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return <div className={styles.Header}>Trello Clone</div>;
};

export default memo(Header);
