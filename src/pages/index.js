import * as React from 'react';
import Header from '../components/organisms/Header';
import AboutSection from '../components/organisms/AboutSection';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';
import ProjectSection from '../components/organisms/ProjectSection';

const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Header />
        <AboutSection />
        <ProjectSection />
      </main>
    </>
  );
};

export default IndexPage;
