import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Paragraph from '../atoms/Paragraph'
import SectionTitle from '../molecules/SectionTitle'
import CV from '../../cv/CV.pdf'
import ArrowDownload from '../atoms/ArrowDownload'

const AboutSection = () => {
  return (
    <>
      <section className='container' id='about'>
        <SectionTitle type='h2' text='À propos 🍕' />
        <div className='section'>
          <div className='section--article'>
            <Paragraph className='section--drop'>
              Après une initiation au développement en suivant quelques tutos
              sur HTML et CSS, j’ai tout de suite accroché. J’ai adoré obtenir
              un rendu concret en si peu de temps et en tapant quelques lignes
              de code. Depuis, le CSS from-scratch est sûrement l’un des défis
              que je préfère et je suis en train de découvrir comment le rendre
              dynamique avec des bibliothèques d’animations telles que AnimeJs
              et GSAP.
            </Paragraph>
            <Paragraph className='section--drop'>
              Lors d’un projet client en collaboration avec un développeur
              freelance, j’ai découvert la JAMStack et ce fut une grande
              révélation. Créer un site fonctionnel au design parfait et
              optimisé fut une expérience qui a conforté mon choix de m’orienter
              vers le développement frontend. Depuis, je ne cesse de renforcer
              mes bases en HTML, CSS, JS et React, tout en testant de nouvelles
              technos comme TypeScript, NextJs, Gatsby, des headless CMS et
              Tailwind.
            </Paragraph>
            <Paragraph>
              Plus tard, j’aimerais toucher à la 3D avec ThreeJs et le WebGl
              pour pousser mes connaissances dans tout ce qui touche aux
              animations et aux interactions créatives !
            </Paragraph>
          </div>
          <div className='section--media'>
            <div className='section--img__wrapper'>
              <StaticImage
                src='../../images/mac4.png'
                alt='macbook'
                width={325}
                height={402}
                quality={100}
                draggable='false'
              />
            </div>
          </div>
        </div>
      </section>
      <section className=' section-color'>
        <div className=' container section section--reverse'>
          <div className='section--article'>
            <Paragraph className='section--drop'>
              Après des études non convaincantes, quelques années à faire des
              petits boulots et plusieurs mois de réflexion, j’ai décidé de me
              concentrer sur ce que je voulais réellement faire : un métier qui
              allait me passionner et me faire découvrir de nouvelles choses
              chaque jour.
            </Paragraph>
            <Paragraph className='section--drop'>
              J’ai eu la chance de m’initier au développement grâce à mon frère,
              dev frontend freelance, qui m’a fait découvrir les fondamentaux du
              web. Ensuite, j’ai approfondi le développement web lors d’une
              immersion à ses côtés. Il a su me faire découvrir les différentes
              facettes du métier et depuis cette période je ne cesse de m’y
              intéresser.
            </Paragraph>
            <Paragraph>
              J’ai suivi plusieurs formations en ligne jusqu’au moment où j’ai
              décidé de me former professionnellement en choisissant la
              formation de développeur web et mobile de la Wild Code School de
              Nantes. Le format de 5 mois en présentiel, la gestion de projets à
              travers les méthodes agiles et les technologies actuelles ont su
              me séduire.
            </Paragraph>
          </div>
          <div className='section--media'>
            <div className='section--img__reverse'>
              <StaticImage
                src='../../images/CV.png'
                alt='cv'
                width={325}
                height={402}
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
    </>
  )
}

export default AboutSection
