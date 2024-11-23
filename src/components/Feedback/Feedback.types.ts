import { IReviewsState } from "../../App";

export interface ReviewsProps {
  reviews: IReviewsState;
  total: number;
  positiveFeedback: number;
}
