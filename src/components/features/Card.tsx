import classNames from 'classnames';
import React, { Children } from 'react';
import { useFeatureStore } from './store';

type Props = {
  gradient: string;
  children: React.ReactNode;
} & CardProps

type CardProps = {
  id: string;
};

const FeatureCard = ({ gradient, children, id }: Props) => {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);
  return (
    <div
      className={classNames(
        'w-full h-full rounded-2xl bg-gradient-to-br absolute transition-opacity',
        gradient,
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default FeatureCard;

export const Todo = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      gradient='from-[#f7f0ff] to-[#a78afe]'
    >
      <span />
    </FeatureCard>
  );
};

export const Colors = ({ id }: CardProps) => {
  return (
    <FeatureCard
      gradient='from-[#f5fbff] to-[#addeff]'
      id={id}
    >
      <span />
    </FeatureCard>
  );
};

export const Availability = ({id}: CardProps) => {
  return (
    <FeatureCard
      gradient='from-[#f5fff7] to-[#adf8ff]'
      id={id}
    >
      <span />
    </FeatureCard>
  );
};

export const SchedulingLinks = ({id}: CardProps) => {
  return (
    <FeatureCard
      gradient='from-[#fff7f5] to-[#ffd8ad]'
      id={id}
    >
      <span />
    </FeatureCard>
  );
};

export const Team = ({id}: CardProps) => {
  return (
    <FeatureCard
      gradient='from-[#fef5ff] to-[#ffade1]'
      id={id}
    >
      <span />
    </FeatureCard>
  );
};

export const Music = ({id}: CardProps) => {

  return (
    <FeatureCard
      gradient='from-[#f7fff5] to-[#adffd8]'
      id={id}
    >
      <span />
    </FeatureCard>
  );
};
