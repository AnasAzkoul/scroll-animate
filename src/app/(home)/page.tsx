"use client"
/* eslint-disable react/no-unescaped-entities */
import HeroSection from '@/components/hero/hero';
import FeaturedTitle from '../../components/features/Title';
import {
  Todo,
  Colors,
  Availability,
  Team,
  Music,
  SchedulingLinks,
} from '@/components/features/Card';
import { useFeatureStore } from '@/components/features/store';
import {inView} from 'framer-motion';

const features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    card: Todo,
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    card: Colors,
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    card: Availability,
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    card: Music,
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    card: SchedulingLinks,
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    card: Team,
  },
];

export default function Home() {
  const inViewFeature = useFeatureStore(state => state.inViewFeature);

  return (
    <main>
      <div className='mx-auto max-w-6xl px-4'>
        <HeroSection />
        <div className='flex gap-20'>
          <div className='flex-1 py-[50vh]'>
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeaturedTitle id={feature.id}>{feature.title}</FeaturedTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-1 sticky top-0 flex items-center self-start h-screen'>
            <div className='relative w-full aspect-square bg-gray-100 rounded-2xl'>
              {features.map((feature) => (
                <feature.card key={feature.id} id={feature.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
