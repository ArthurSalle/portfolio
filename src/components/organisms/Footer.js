import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Title from '../atoms/Title';
import LinkedIn from '../atoms/LinkedIn';
import Mail from '../atoms/Mail';
import GitHub from '../atoms/GitHub';
import Twitter from '../atoms/Twitter';

const Footer = () => {
  return (
    <section className='container'>
      <footer className='footer' id='contact'>
        <div className='footer--title'>
          <Title type='h2'>
            Contact{' '}
            <span role='img' aria-label='telephone'>
              {' '}
              ☎️
            </span>
          </Title>
        </div>
        <div className='footer--link'>
          <div className='footer--contact'>
            <a to='/#' href='mailto:arthursalle.pro@gmail.com'>
              <Mail width='21px' fill='#c9d1c1' />
              arthursalle.pro@gmail.com
            </a>
            <a
              to='/#'
              target='blank'
              href='https://www.linkedin.com/in/arthur-sall%C3%A9/'
            >
              <LinkedIn width='21px' fill='#c9d1c1' />
              LinkedIn
            </a>
            <a to='/#' target='blank' href='https://github.com/ArthurSalle'>
              <GitHub width='21px' fill='#c9d1c1' /> GitHub
            </a>
            <a to='/#' target='blank' href='https://twitter.com/SaltyArthur'>
              <Twitter width='21px' fill='#c9d1c1' /> Twitter
            </a>
          </div>

          <div className='footer--stack'>
            <Title type='h4'>Fabriqué avec</Title>
            <Paragraph className='drop--color'>
              React, Gatsby, Sass et AnimeJs, design par Armand & Pierre Louis{' '}
              <span role='img' aria-label='heart'>
                ❤️🔥
              </span>
            </Paragraph>
          </div>
        </div>
      </footer>
      <div className='copyright'>
        <p>All Rights Reserved. Arthur Sallé 2021 © </p>
      </div>
    </section>
  );
};

export default Footer;
