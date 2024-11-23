import { useEffect, useState } from 'react';

import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

import { IReviewsState, Buttons, Button } from './types/app';

import './App.css';

function App() {
  const [reviews, setReviews] = useState<IReviewsState>(() => {
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) return JSON.parse(savedReviews);
    else return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const title = 'Sip Happens Café';
  const subTitle =
    'Please leave your feedback about our service by selecting one of the options below';
  const arrayButtons: Buttons = ['good', 'neutral', 'bad'];

  const totalFeedback = Object.values(reviews).reduce((total, quantity) => total + quantity, 0);
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  const updateFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    const feedbackType: Button = e.currentTarget.dataset.name as Button;
    setReviews({ ...reviews, [feedbackType]: reviews[feedbackType] + 1 });
  };

  const resetFeedback = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Container>
        <Description title={title} subtitle={subTitle} />
        <Options
          buttons={arrayButtons}
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={resetFeedback}
        />
        {totalFeedback ? (
          <Feedback reviews={reviews} total={totalFeedback} positiveFeedback={positiveFeedback} />
        ) : (
          <Notification />
        )}
      </Container>
    </>
  );
}

export default App;
