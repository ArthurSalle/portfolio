// import { StaticImage } from 'gatsby-plugin-image';
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
                choses simples, me retrouver en extérieur. J’aime également
                sortir me balader, partir à la découverte d’endroit que je ne
                connais pas, dénicher des coins atypiques. Je suis aussi fan de
                la culture old school, du skate, de la moto, des tatouages, de
                la street food mais surtout des pizzas. J’aime me balader à
                Amsterdam pour l’ambiance que dégage la ville et sa beauté, où
                la nature se mêle au centre ville à travers les canaux, et où la
                vie ne s’arrête jamais.
              </Paragraph>
            </div>
          </div>
          <div className='article--media'>
            <div className='article--container__wrapper'>
              <StaticImage
                src='../../images/arthur.png'
                alt='Arthur Sallé'
                width={315}
                height={315}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalSection;
