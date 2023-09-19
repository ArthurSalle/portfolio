import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Title from '../atoms/Title'
import LinkedIn from '../atoms/LinkedIn'
import Mail from '../atoms/Mail'
import GitHub from '../atoms/GitHub'
import Twitter from '../atoms/Twitter'

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
            <a
              to='/#'
              href='mailto:arthur.salle95@gmail.com?subject=Hello ! 👋🏼'
            >
              <Mail width='21px' fill='#c9d1c1' />
              arthur.salle95@gmail.com
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
            <Paragraph className='h4'>Fabriqué avec</Paragraph>
            <Paragraph className='drop--color'>
              React, Gatsby, Sass et AnimeJs, font TT Norms by Ivan Gladkikh,
              design réalisé avec Armand & Pierre Louis{' '}
              <span role='img' aria-label='heart'>
                ❤️🔥
              </span>
            </Paragraph>
            <div className='footer--copyright'>
              <Paragraph className='drop--color drop--copyright'>
                All Rights Reserved.
              </Paragraph>
              <Paragraph className='drop--color drop--copyright'>
                Arthur Sallé 2021 ©
              </Paragraph>
            </div>
          </div>
        </div>
      </footer>
      <div className='footer--space'></div>
    </section>
  )
}

export default Footer
