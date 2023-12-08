import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Paragraph from '../atoms/Paragraph'
import SectionTitle from '../molecules/SectionTitle'

const PersonalSection = () => {
  return (
    <>
      <section className='container'>
        <div className='article'>
          <div className='article--content'>
            <SectionTitle type='h2' text="Ce que j'aime avant tout 😍" />
            <div className='article--text'>
              <Paragraph className='section--drop'>
                J’apprécie les choses simples comme me balader en ville, en
                fôret ou au bord de la mer. J'aime aussi le skate, le surf, les
                tattoos, les chiens, la street food mais surtout les pizzas.
                J'apprécie aussi les moments de détente, rien de tel qu'une
                bonne session de Netflix & Chill ou de jeux vidéos par un temps
                pluvieux !
              </Paragraph>
            </div>
          </div>
          <div className='article--media'>
            <div className='article--container__wrapper'>
              <StaticImage
                src='../../images/sea.png'
                alt='forêt'
                width={315}
                height={315}
                quality={100}
                draggable='false'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PersonalSection
