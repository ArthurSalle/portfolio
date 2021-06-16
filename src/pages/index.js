import * as React from 'react';
import Header from '../components/organisms/Header';
import AboutSection from '../components/organisms/AboutSection';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';
import ProjectSection from '../components/organisms/ProjectSection';
import PersonalSection from '../components/organisms/PersonalSection';

const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Header />
        <AboutSection />
        <ProjectSection />
        <PersonalSection />
      </main>
    </>
  );
};

export default IndexPage;
