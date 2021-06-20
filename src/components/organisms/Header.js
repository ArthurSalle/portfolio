import React from 'react';
import Title from '../atoms/Title';
import { Link } from 'gatsby';
import Arthur from '../../images/arthur.png';

const Header = () => {
  return (
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
          <img src={Arthur} alt='Arthur Sallé' />
        </div>
        <div className='header--menu__btn'>
          <Link
            to='#about'
            className='btn btn--center btn--green rotate-first '
          >
            À propos
          </Link>
          <Link
            to='#projects'
            className='btn btn--center btn--green rotate-second'
          >
            Projets
          </Link>
          <Link
            to='#contact'
            className='btn btn--center btn--green rotate-third'
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
