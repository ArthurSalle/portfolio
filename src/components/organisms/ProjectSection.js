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
              Polenta & Linen
              <span role='img' aria-label='wip'>
                {' '}
                🚧
              </span>
            </Title>
            <Paragraph>
              Site de recettes familiales réalisé en collaboration avec Armand
              Sallé. #WIP
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
                href='https://polenta-linen.vercel.app/'
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
            <Title type='h3'>
              InvestigData
              <span role='img' aria-label='wip'>
                {' '}
                🚧
              </span>
            </Title>
            <Paragraph>
              Support numérique et de ressources venant compléter un Serious
              Game sur les lois de la RGPD. Réalisé en groupe durant la
              formation. #WIP
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
            <Title type='h3'>Space Protection of Alien</Title>
            <Paragraph>
              Site de sensibilisation et d’adoption d’aliens abandonnés. Réalisé
              en groupe lors d'un hackhaton de 48h sur le thème de l’espace.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/space-protection-alien'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                GitHub <ArrowLink width='16px' fill='#184340' />
              </a>
              <a
                href='https://spaceportectionofalien.netlify.app/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link'>
              <button className='project--tag'>Axios</button>
              <button className='project--tag'>FireBase</button>
              <button className='project--tag'>ReactJS</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/alien.png'
            alt='Alien'
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
              Herbier répertoriant tout les parcs et Magnolias de la ville de
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
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>4 Spririted Guys</Title>
            <Paragraph>
              Site vitrine d’un bar fictif. Informations, achats en ligne,
              réservation en ligne et formulaire de contact. Premier projet
              réalisé en groupe durant la formation.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/4-spirited-guys'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                GitHub <ArrowLink width='16px' fill='#184340' />
              </a>
              <a
                href='https://4-spirited-guys.netlify.app/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link'>
              <button className='project--tag'>HTML</button>
              <button className='project--tag'>SCSS</button>
              <button className='project--tag'>JS</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/bar.png'
            alt='bar'
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
