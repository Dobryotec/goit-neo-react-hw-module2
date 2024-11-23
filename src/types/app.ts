export interface IReviewsState {
  good: number;
  neutral: number;
  bad: number;
}

export type Button = 'good' | 'neutral' | 'bad';

export type Buttons = Button[];
