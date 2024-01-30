import { motion } from 'framer-motion';
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='h-screen flex relative overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen '
            >
              <motion.img
                initial={{ y: -300,opacity:0 }}
                transition={{ duration: 1.2, opacity:1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src='https://i.ibb.co/3FTJffZ/mockup-design.png'
                alt='project-image'
              />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  {' '}
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  UPS Clone
                </h4>
                <p className='text-lg text-center md:text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  );
};

export default Projects;