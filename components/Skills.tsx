import { motion } from 'framer-motion';
import SkillTag from './Skill';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {skills: Skill[];};

function Skills({skills}: Props) {

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    
    className='h-screen flex relative flex-col text-center sm:text-center md:text-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm absolute'>Hover over a current proficiency </h3>

      <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5'>
        {skills.map(skill=>(
          <>
          <SkillTag key={skill._id} skill={skill}/>
          </>
        ))}

      </div>
    </motion.div>
  );
}

export default Skills;
