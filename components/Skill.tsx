import { motion } from 'framer-motion';
type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='data:image/png;base64,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'
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition durationn-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100 '>100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
