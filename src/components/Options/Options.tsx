import clsx from 'clsx';

import Option from '../Option/Option';
import { IButtonsProps } from './Options.types';

import css from './Options.module.css';

const Options: React.FC<IButtonsProps> = ({
  buttons,
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <ul className={css['buttons-list']}>
      {buttons.map(button => (
        <li key={button}>
          <Option name={button} updateFeedback={updateFeedback} />
        </li>
      ))}
      {totalFeedback > 0 && (
        <li>
          <button
            className={clsx(css.button, css['button-reset'])}
            type="button"
            onClick={resetFeedback}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
