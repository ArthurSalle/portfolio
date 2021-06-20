import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Paragraph from '../atoms/Paragraph';
import SectionTitle from '../molecules/SectionTitle';

const PersonalSection = () => {
  return (
    <>
      <section className='container'>
        <div className='article '>
          <div className='article--content'>
            <SectionTitle type='h2' text="Ce que j'aime avant tout 😍" />
            <div className='article--text'>
              <Paragraph className='section--drop'>
                Ayant grandi dans un petit village de Sologne, j’apprécie les
                choses simples comme me retrouver en extérieur. J’aime partir à
                la découverte d’endroits que je ne connais pas et dénicher des
                coins atypiques. Je suis aussi fan de la culture old school, du
                skate, de la moto, des tatouages, de la street food mais surtout
                des pizzas.
              </Paragraph>
            </div>
          </div>
          <div className='article--media'>
            <div className='article--container__wrapper'>
              <StaticImage
                src='../../images/lake.png'
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
  );
};

export default PersonalSection;
