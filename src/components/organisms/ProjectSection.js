import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ArrowLink from '../atoms/ArrowLink';
import Cross from '../atoms/Cross';
import Paragraph from '../atoms/Paragraph';
import Title from '../atoms/Title';
import SectionTitle from '../molecules/SectionTitle';

const ProjectSection = () => {
  return (
    <section className='container' id='projects'>
      <SectionTitle type='h2' text='Projets 💻' />
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>
              ApplyFuture
              <span role='img' aria-label='wip'>
                {' '}
                🚧
              </span>
            </Title>
            <Paragraph>
              Stage de fin de formation. Création d'une interface de traduction
              avec i18n et création de la partie Blog du site. #WIP
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/polenta-linen'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                GitHub <Cross width='16px' fill='#184340' />
              </a>
              <a
                href='https://www.polentaandlinen.com/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link project--link-column'>
              <div>
                <button className='project--tag'>NextJS</button>
                <button className='project--tag'>GraphQL</button>
                <button className='project--tag'>TypeScript</button>
              </div>
              <div>
                <button className='project--tag'>AWS</button>
                <button className='project--tag'>i18n</button>
                <button className='project--tag'>Tailwind</button>
                <button className='project--tag'>Jest</button>
              </div>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/books.png'
            alt='pizza'
            width={200}
            height={200}
            quality={100}
            draggable='false'
          />
        </div>
      </div>
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Portfolio | Webflow</Title>
            <Paragraph>
              Découverte de l'outil no-code Webflow et reproduction de mon
              portfolio.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/polenta-linen'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                GitHub <Cross width='16px' fill='#184340' />
              </a>
              <a
                href='https://arthur-salle.webflow.io/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link'>
              <button className='project--tag'>Webflow</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/macbook.png'
            alt='pizza'
            width={200}
            height={200}
            quality={100}
            draggable='false'
          />
        </div>
      </div>
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Polenta & Linen</Title>
            <Paragraph>
              Site de recettes familiales réalisé en collaboration avec Armand
              Sallé.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/polenta-linen'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                GitHub <ArrowLink width='16px' fill='#184340' />
              </a>
              <a
                href='https://www.polentaandlinen.com/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link'>
              <button className='project--tag'>NextJS</button>
              <button className='project--tag'>Contentful</button>
              <button className='project--tag'>TypeScript</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/pizza.png'
            alt='pizza'
            width={200}
            height={200}
            quality={100}
            draggable='false'
          />
        </div>
      </div>
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>InvestigData</Title>
            <Paragraph>
              Support numérique et de ressources venant compléter un Serious
              Game sur les lois de la RGPD. Projet réalisé en groupe durant la
              formation.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='/'
                target='_blank'
                rel='noreferrer'
                className='disabled btn btn--link btn--link__effect'
              >
                GitHub <Cross width='16px' fill='#184340' />
              </a>
              <a
                href='/'
                target='_blank'
                rel='noreferrer'
                className='disabled btn btn--link btn--link__effect'
              >
                Live <Cross width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link'>
              <button className='project--tag'>ReactJS</button>
              <button className='project--tag'>Heroku</button>
              <button className='project--tag'>Tailwind</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/game.png'
            alt='carte'
            width={200}
            height={200}
            quality={100}
            draggable='false'
          />
        </div>
      </div>
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Magnolia In Nantes</Title>
            <Paragraph>
              Herbier répertoriant tous les parcs et Magnolias de la ville de
              Nantes, l’objectif est de se balader pour remplir son herbier
              grâce à la géolocalisation. Projet réalisé en groupe durant la
              formation.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/nts-js-202103-p2-herbier'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                GitHub <ArrowLink width='16px' fill='#184340' />
              </a>
              <a
                href='https://magnoliafornantes.netlify.app/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link'>
              <button className='project--tag'>ReactJS</button>
              <button className='project--tag'>Leaflet</button>
              <button className='project--tag'>FireBase</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/magnolia.png'
            alt='fleur'
            width={200}
            height={200}
            quality={100}
            draggable='false'
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
