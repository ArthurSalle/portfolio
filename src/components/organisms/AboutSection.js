import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Paragraph from '../atoms/Paragraph'
import CV from '../../cv/CV.pdf'
import ArrowDownload from '../atoms/ArrowDownload'

const AboutSection = () => {
  return (
    <section className='section-color_custom'>
      <section className='container' id='about'>
        <div className='section--title_custom'>
          <h2 className='h2'>À propos 🍕</h2>
          <div className='section--line'></div>
        </div>

        <div className='section'>
          <div className='section--article'>
            <Paragraph className='section--drop'>
              Hello, moi c’est Arthur, développeur frontend spécialisé dans
              React et TypeScript. Au cours des deux dernières années, je me
              suis pleinement investi dans la conception d'applications
              fonctionnelles et intuitives, traduisant efficacement les besoins
              des clients en solutions interactives.
            </Paragraph>
            <Paragraph className='section--drop'>
              Ma passion pour le développement s'exprime à travers des
              applications robustes, tout en conservant une forte sensibilité
              pour l'aspect design. J'aime créer des applications qui fusionnent
              une expertise technique solide avec une esthétique soignée,
              offrant ainsi des expériences utilisateur exceptionnelles.
            </Paragraph>
          </div>
          <div className='section--media'>
            <div className='section--img__reverse'>
              <StaticImage
                src='../../images/CV.png'
                alt='cv'
                width={325}
                quality={100}
                draggable='false'
              />
            </div>
            <div className='header--menu__btn'>
              <a
                to=''
                href={CV}
                target='blank'
                download='CV-ArthurSallé'
                className='btn btn--center btn--center__cv btn--beige rotate-cv'
              >
                Mon CV <ArrowDownload width='36px' fill='#184340' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutSection
