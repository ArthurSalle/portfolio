import * as React from 'react';
import Header from '../components/organisms/Header';
import AboutSection from '../components/organisms/AboutSection';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';
import ProjectSection from '../components/organisms/ProjectSection';
import PersonalSection from '../components/organisms/PersonalSection';
import Footer from '../components/organisms/Footer';

const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Header />
        <AboutSection />
        <ProjectSection />
        <div className='section-color'>
          <PersonalSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
