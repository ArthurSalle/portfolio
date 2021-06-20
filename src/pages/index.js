import anime from 'animejs';
import React, { useEffect } from 'react';
import AboutSection from '../components/organisms/AboutSection';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import PersonalSection from '../components/organisms/PersonalSection';
import ProjectSection from '../components/organisms/ProjectSection';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';

const IndexPage = () => {
  useEffect(() => {
    console.log(
      '%c Hello !',
      'padding-bottom: 15px; margin: 0 auto; font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)'
    );
  }, []);

  useEffect(() => {
    anime
      .timeline({
        easing: 'easeInSine',
      })
      .add(
        {
          targets: '.name',
          translateY: [20, 0],
          duration: 1000,
          opacity: [0, 1],
        },
        '+=500'
      )
      .add(
        {
          targets: '.screen',
          translateY: [0, '-100%'],
          duration: 1500,
          easing: 'easeInOutExpo',
        },
        '+=600'
      );
  }, []);

  return (
    <>
      <Seo />
      <div className='screen'>
        <p className='name'>ARTHUR SALLÉ</p>
      </div>
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
