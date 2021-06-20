import React, { useEffect } from 'react';
import anime from 'animejs';
import Title from '../atoms/Title';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  useEffect(() => {
    anime({
      targets: '.screen',
      translateY: [0, '-100%'],
      duration: 1500,
      easing: 'easeInOutExpo',
      delay: 1500,
    });

    anime({
      targets: '.name',
      translateY: [20, 0],
      duration: 1000,
      easing: 'easeInSine',
      opacity: [0, 1],
      delay: 500,
    });

    anime({
      targets: '.header',
      translateY: [20, 0],
      duration: 1000,
      easing: 'easeInSine',
      opacity: [0, 1],
      delay: 2500,
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const link = new URL(e.target.href);
    const targetElement = document.querySelector(link.hash);
    const targetPosition = targetElement.getBoundingClientRect();
    const targetY = targetPosition.y;
    const scrollPosition = targetY + window.scrollY;

    let animeObjPosition = {
      newY: window.scrollY,
    };

    anime({
      targets: animeObjPosition,
      newY: scrollPosition,
      easing: 'easeInOutQuart',
      duration: 2000,
      round: 1,
      update: function () {
        window.scrollTo(0, animeObjPosition.newY);
      },
    });
  };

  return (
    <>
      <div className='screen'>
        <p className='name'>ARTHUR SALLÉ</p>
      </div>
      <header className='header container '>
        <div className='header--title'>
          <Title type='h1'>
            Hello, moi c’est <strong>Arthur</strong>, développeur frontend à la{' '}
            <strong>recherche</strong> d’un <strong>stage</strong> ou d’un{' '}
            <strong>cdi</strong> basé à Nantes ou en remote
          </Title>
        </div>
        <div className='header--menu'>
          <div className='header--img__wrapper'>
            <StaticImage
              className='header--img'
              src='../../images/arthur.png'
              alt='Arthur Sallé'
              width={352}
              height={235}
              quality={100}
              draggable='false'
            />
          </div>
          <div className='header--menu__btn'>
            <Link
              to='/#about'
              className='btn btn--center btn--green rotate-first'
              onClick={handleClick}
            >
              À propos
            </Link>
            <Link
              to='/#projects'
              className='btn btn--center btn--green rotate-second'
              onClick={handleClick}
            >
              Projets
            </Link>
            <Link
              to='/#contact'
              className='btn btn--center btn--green rotate-third'
              onClick={handleClick}
            >
              Contact
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
