import { CardObj } from 'types';

import styles from './List.module.css';

type ListProps = {
  title: string;
  id: string;
  cards: CardObj[];
};
const List: React.FC<ListProps> = (props) => {
  const { title } = props;
  return (
    <span className={styles.List}>
      <h4>{title}</h4>
    </span>
  );
};

export default List;
