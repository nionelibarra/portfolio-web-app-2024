import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 mt-40 flex-shrink-0 w-[300px] md:mt-30 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/jdcdiitqyn1vyz3t33zy'
      ></motion.img>

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Engineer at Ingenuity Software</h4>
        <p className='font-bold text-2xl mt-1'>Ingenuity Global Consulting Inc.</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react" />
          <img className='h-10 w-10 rounded-full' src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react" />
          <img className='h-10 w-10 rounded-full' src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png" alt="react" />
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work.... - Ended ....</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>this is more</li>
          <li>this is more</li>
          <li>this is more</li>
          <li>this is more</li>
          <li>this is more</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
