'use client'

import { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const difference = +new Date('2025-01-11T11:00:00') - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

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
          <div className='flex flex-col justify-center items-center space-y-8 md:flex-row text-8xl space-x-8'>
            <div className='bg-white p-4 rounded-xl'>{timeLeft.hours + timeLeft.days*24<10 && "0"}{timeLeft.hours + timeLeft.days*24}h</div>
            <div className='bg-white p-4 rounded-xl'>{timeLeft.minutes<10 && "0"}{timeLeft.minutes}m</div>
            <div className='bg-white p-4 rounded-xl'>{timeLeft.seconds<10 && "0"}{timeLeft.seconds}s</div>
          </div>
        ) : (
          <span>Event has started!</span>
        )}
      </div>
    </div>
  );
}
