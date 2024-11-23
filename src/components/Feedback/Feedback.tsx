import clsx from 'clsx';

import { ReviewsProps } from '../../types/feedback';

import css from './Feedback.module.css';

const Feedback: React.FC<ReviewsProps> = ({
  reviews: { good, neutral, bad },
  total,
  positiveFeedback,
}) => {
  return (
    <ul className={css['feedback-list']}>
      <li className={css['feedback-item']}>
        Good: <span className={clsx({ [css.good]: good })}>{good}</span>
      </li>
      <li className={css['feedback-item']}>
        Neutral: <span className={clsx({ [css.neutral]: neutral })}>{neutral}</span>
      </li>
      <li className={css['feedback-item']}>
        Bad: <span className={clsx({ [css.bad]: bad })}>{bad}</span>
      </li>
      <li className={css['feedback-item']}>
        Total: <span className={css['feedback-item-quantity']}>{total}</span>
      </li>
      <li className={css['feedback-item']}>
        Positive: <span className={css['feedback-item-quantity']}>{positiveFeedback}%</span>
      </li>
    </ul>
  );
};

export default Feedback;
