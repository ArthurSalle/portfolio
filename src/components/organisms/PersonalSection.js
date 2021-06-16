import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Paragraph from '../atoms/Paragraph';
import SectionTitle from '../molecules/SectionTitle';

const PersonalSection = () => {
  return (
    <>
      <section className='section-color'>
        <div className='container'>
          <div className='section section--reverse'>
            <div className='section--article'>
              <SectionTitle type='h2' text="Ce que j'aime avant tout 😍" />
              <Paragraph className='section--drop'>
                Ayant grandi dans un petit village de Sologne, j’apprécie les
                choses simples, me retrouver en extérieur. J’aime également
                sortir me balader, découvrir de nouveaux paysages, partir à la
                découverte d’endroit que je ne connais pas, dénicher des coins
                atypiques. Je suis aussi fan de la culture old school, du skate,
                de la moto, des tatouages, de la street food mais surtout des
                pizzas. J’aime me balader à Amsterdam pour l’ambiance que dégage
                la ville et sa beauté, où la nature se mêle au centre ville à
                travers les canaux, et où la vie ne s’arrête jamais.
              </Paragraph>
            </div>
            <div className='section '>
              <div className='section--container__first'>
                <div className='section--container__first__wrapper'>
                  <StaticImage
                    src='../../images/arthur.png'
                    alt='Arthur Sallé'
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className='section--container__second'>
                <div className='section--container__second__wrapper'>
                  <StaticImage
                    src='../../images/food.png'
                    alt='Arthur Sallé'
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className='section--container__third'>
                <div className='section--container__third__wrapper'>
                  <StaticImage
                    src='../../images/food.png'
                    alt='Arthur Sallé'
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalSection;
