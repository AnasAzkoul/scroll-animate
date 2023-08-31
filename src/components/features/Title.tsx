'use client';
import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';
import { useFeatureStore } from './store';

interface TitleProps {
  children: React.ReactNode;
  id: string;
}

const Title = ({ children, id }: TitleProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    // set the global state inViewFeature to the id of the title.
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      className={classNames(
        `text-5xl py-16 font-heading transition-colors`,
        isInView ? 'text-black' : 'text-gray-300'
      )}
      ref={ref}
    >
      {children}
    </p>
  );
};

export default Title;
