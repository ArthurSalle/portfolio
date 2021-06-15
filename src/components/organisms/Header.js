import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Title from '../atoms/Title';
import Button from '../atoms/Button';
import { Link } from 'gatsby';

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
          <StaticImage
            src='../../images/arthur.png'
            alt='Arthur Sallé'
            width={352}
            height={235}
            quality={100}
            placeholder='none'
          />
        </div>
        <div className='header--menu__btn'>
          <Button
            children={
              <Link to='/' className='btn btn--green rotate-first'>
                À propos
              </Link>
            }
          />
          <Button
            children={
              <Link to='/' className='btn btn--green rotate-second'>
                Projets
              </Link>
            }
          />
          <Button
            children={
              <Link to='/' className='btn btn--green rotate-third'>
                Contact
              </Link>
            }
          />
        </div>
      </div>
    </header>
  );
};

export default Header;