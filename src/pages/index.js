import React, { useEffect } from 'react';
import Header from '../components/organisms/Header';
import AboutSection from '../components/organisms/AboutSection';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';
import ProjectSection from '../components/organisms/ProjectSection';
import PersonalSection from '../components/organisms/PersonalSection';
import Footer from '../components/organisms/Footer';

const IndexPage = () => {
  useEffect(() => {
    console.log(
      '%c Hello !',
      'padding-bottom: 15px; margin: 0 auto; font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
    );
  }, []);

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
