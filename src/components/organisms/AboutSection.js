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
              de code. Depuis, le développement me passionne et mon quotidien
              est rythmé par la création de web apps.
            </Paragraph>
            <Paragraph className='section--drop'>
              Pendant près de deux ans, j'ai travaillé en tant que développeur
              web fullstack, utilisant principalement Vue.js, Laravel et
              PostgreSQL pour mes projets. Ce que j'apprécie particulièrement
              dans ce rôle, c'est la polyvalence qu'il offre. En effet, j'ai la
              possibilité de travailler sur tous les aspects d'une application,
              que ce soit le développement côté frontend, backend ou la gestion
              de la base de données. Cette diversité me permet de m'impliquer
              pleinement dans chaque phase du projet et de les faire évoluer en
              fonction des besoins.
            </Paragraph>

            <Paragraph className='section--drop'>
              J'apprécie particulièrement travailler de manière autonome sur le
              développement de nouvelles fonctionnalités. Cela me permet
              d'explorer de nouvelles idées et d'améliorer en permanence les
              applications sur lesquelles je travaille. En parallèle, j'aime
              prendre en charge l'intégralité du processus, de la création
              d'APIs à la conception d'une interface utilisateur conviviale.
              Cette approche globale me permet de concevoir des solutions
              complètes et de répondre de manière créative et efficace aux
              besoins changeants.
            </Paragraph>

            <Paragraph className='section--drop'></Paragraph>
            <Paragraph></Paragraph>
          </div>
          <div className='section--media'>
            <div className='section--img__wrapper'>
              <StaticImage
                src='../../images/code.png'
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
              développeur frontend, qui m’a fait découvrir les fondamentaux du
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
