import * as React from 'react';
import Header from '../components/organisms/Header';
import AboutSection from '../components/organisms/AboutSection';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Header />
        <AboutSection />
      </main>
    </>
  );
};

export default IndexPage;
