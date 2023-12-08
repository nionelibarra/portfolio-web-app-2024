import Head from 'next/head';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import WorkExperience from '../../components/WorkExperience';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import ContactMe from '../../components/ContactMe';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Neyo's Portfolio</title>
      </Head>

      {/* Header Section */}
      <Header />

      {/* Hero Banner Section*/}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About Section */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience Section */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>

      {/* Skills Section */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* Projects Section */}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* Contact Me Section */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>
    </div>
  );
}
