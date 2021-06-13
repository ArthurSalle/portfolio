import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Title from '../atoms/Title';
import Button from '../atoms/Button';

const Header = () => {
  return (
    <header className='header container '>
      <div className='header--title'>
        <Title type={'h1'}>
          Hello, moi c’est <strong>Arthur</strong>, développeur frontend à la{' '}
          <strong>recherche</strong> d’un <strong>stage</strong> ou d’un{' '}
          <strong>cdi</strong> basé à Nantes ou en remote
        </Title>
      </div>
      <div className='header--menu'>
        <div className='header--img__wrapper'>
          <StaticImage
            src='../../images/arthur.png'
            alt="Photo d'Arthur Sallé"
            width={352}
            height={235}
            quality={100}
            placeholder='none'
          />
        </div>
        <div className='header--menu__btn'>
          <Button title={'À propos'} className={'btn--green rotate-first'} />
          <Button title={'Projets'} className={'btn--green rotate-second'} />
          <Button title={'Contact'} className={'btn--green rotate-third'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
