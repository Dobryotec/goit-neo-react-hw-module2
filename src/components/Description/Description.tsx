import { IDescriptionProps } from './Description.types';

import css from './Description.module.css';

const Description: React.FC<IDescriptionProps> = ({ title, subtitle }) => {
  return (
    <div className={css['header-block']}>
      <h1 className={css.title}>{title}</h1>
      <h2 className={css.subtitle}>{subtitle}</h2>
    </div>
  );
};

export default Description;
