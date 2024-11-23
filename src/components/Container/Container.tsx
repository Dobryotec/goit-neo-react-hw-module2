import { IContainerChildren } from '../../types/Container';

import css from './Container.module.css';

const Container: React.FC<IContainerChildren> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
