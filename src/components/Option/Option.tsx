import clsx from 'clsx';

import firstLetterToUpperCase from '../../helpers/firstLetterToUpperCase';
import { IButtonProps } from '../Options/Options.types';

import css from './Option.module.css';

const Option: React.FC<IButtonProps> = ({ name, updateFeedback }) => {
  return (
    <button
      className={clsx(css.button, {
        [css['button-good']]: name === 'good',
        [css['button-neutral']]: name === 'neutral',
        [css['button-bad']]: name === 'bad',
      })}
      type="button"
      data-name={name}
      onClick={updateFeedback}
    >
      {firstLetterToUpperCase(name)}
    </button>
  );
};

export default Option;
