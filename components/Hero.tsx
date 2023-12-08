import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, welcome to Neyos portfolio',
      'no-bullsh*t-code.tsx',
      '<caffeinePowered>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-column space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <h1 className='absolute'>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
      </h1>
    </div>
  );
}
