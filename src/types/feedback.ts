import { IReviewsState } from "./app";

export interface ReviewsProps {
  reviews: IReviewsState;
  total: number;
  positiveFeedback: number;
}
