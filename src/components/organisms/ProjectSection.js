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
              Polenta & Linen, projet client réalisé en collaboration avec
              Armand Sallé, est un site de recettes familiales. #WIP
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
              InvestigData, projet client réalisé en groupe durant la formation,
              est un support numérique et de ressources venant compléter un
              Serious Game sur les lois de la RGPD. #WIP
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
              Space Protection of Alien, hackhaton de 48h sur le thème de
              l’espace et réalisé en groupe. Site de sensibilisation et
              d’adoption d’Alien abandonnés.
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
              Magnolia in Nantes, projet réalisé en groupe, est un herbier
              répertoriant tout les parcs et les Magnolias de la ville de
              Nantes, l’objectif est de se balader pour remplir son herbier
              grâce à la géolocalisation et améliorer son score.
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
              4 Spirited Guys, premier projet réalisé en groupe, est le site
              vitrine d’un bar fictif. Informations, achats en ligne,
              réservation en ligne et formulaire de contact.
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
