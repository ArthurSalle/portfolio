import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ArrowLink from '../atoms/ArrowLink'
import Cross from '../atoms/Cross'
import Paragraph from '../atoms/Paragraph'
import Title from '../atoms/Title'
import SectionTitle from '../molecules/SectionTitle'

const ProjectSection = () => {
  return (
    <section className='container' id='projects'>
      <SectionTitle type='h2' text='Projets 💻' />

      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Vaulty</Title>
            <Paragraph>
              Coffre-fort permettant le stockage de vos identifiants de
              connexion, cartes de crédit et informations d'identité.
              L'application inclut également un générateur de mots de passe pour
              renforcer la sécurité de vos comptes en ligne.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://github.com/ArthurSalle/vaulty'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Github <ArrowLink width='16px' fill='#184340' />
              </a>
              <a
                href='https://vaulty.vercel.app/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Live <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link project--link-column'>
              <div>
                <button className='project--tag'>React</button>
                <button className='project--tag'>TypeScript</button>
                <button className='project--tag'>Vitejs</button>
              </div>
              <div>
                <button className='project--tag'>Zod</button>
                <button className='project--tag'>Tailwind</button>
                <button className='project--tag'>Shadcn/ui</button>
              </div>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/vault.png'
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
            <Title type='h3'>Searocco X Onepoint</Title>
            <Paragraph>
              Développement d'un outil interne pour la DSI Onepoint, favorisant
              la collaboration, la gestion des collaborateurs, des ressources
              matérielles, et la diffusion d'informations au sein de
              l'organisation.
            </Paragraph>
          </div>
          <div>
            <div className='project--link'>
              <a
                href='https://searocco.studio/'
                target='_blank'
                rel='noreferrer'
                className='btn btn--link btn--link__effect'
              >
                Searocco Studio <ArrowLink width='16px' fill='#184340' />
              </a>
            </div>
            <div className='project--link project--link-column'>
              <div>
                <button className='project--tag'>React</button>
                <button className='project--tag'>TypeScript</button>
                <button className='project--tag'>NextJS</button>
              </div>
              <div>
                <button className='project--tag'>Vue</button>
                <button className='project--tag'>Laravel</button>
                <button className='project--tag'>PostgreSQL</button>
              </div>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/office.png'
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
                <button className='project--tag'>TypeScript</button>
                <button className='project--tag'>Contentful</button>
              </div>
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
            <Title type='h3'>ApplyFuture</Title>
            <Paragraph>
              Stage de fin de formation. Création d'une interface de traduction
              avec i18n et création de la partie Blog du site.
            </Paragraph>
          </div>
          <div>
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
    </section>
  )
}

export default ProjectSection
