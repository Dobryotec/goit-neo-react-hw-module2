import { Button, Buttons } from './app';

export interface IButtonProps {
  name: Button;
  updateFeedback: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IButtonsProps {
  buttons: Buttons;
  updateFeedback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  totalFeedback: number;
  resetFeedback: () => void;
}
