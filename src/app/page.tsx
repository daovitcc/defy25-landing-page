'use client'

import { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const difference = +new Date('2025-01-11T11:00:00') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='font-yapariBold'>
      <div className='flex justify-center items-center h-[90vh]'>
        {Object.keys(timeLeft).length > 0 ? (
          <div className='text-8xl space-x-8'>
            <span className='bg-white p-4 rounded-xl'>{timeLeft.days}d </span>
            <span className='bg-white p-4 rounded-xl'>{timeLeft.hours}h </span>
            <span className='bg-white p-4 rounded-xl'>{timeLeft.minutes}m </span>
            <span className='bg-white p-4 rounded-xl'>{timeLeft.seconds}s</span>
          </div>
        ) : (
          <span>Event has started!</span>
        )}
      </div>
    </div>
  );
}
