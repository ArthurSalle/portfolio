// import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Paragraph from '../atoms/Paragraph';
import SectionTitle from '../molecules/SectionTitle';

const PersonalSection = () => {
  return (
    <>
      <section className='container'>
        <div className='article '>
          <SectionTitle type='h2' text="Ce que j'aime avant tout 😍" />
          <div className='article--content'>
            <div className='article--text'>
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
            {/* <div className='article--media'>
              <div className='article--odd'>
                <div className='article--container__first'>
                  <div className='article--container__first__wrapper'>
                    <StaticImage
                      src='../../images/arthur.png'
                      alt='Arthur Sallé'
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className='article--even'>
                <div className='article--container__second'>
                  <div className='article--container__second__wrapper'>
                    <StaticImage
                      src='../../images/food.png'
                      alt='Arthur Sallé'
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className='article--odd article--odd__third '>
                <div className='article--container__third'>
                  <div className='article--container__third__wrapper'>
                    <StaticImage
                      src='../../images/food.png'
                      alt='Arthur Sallé'
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* <section className='article--color'>
        <div className='container'>
          <SectionTitle
            className='article--title'
            type='h2'
            text="Ce que j'aime avant tout 😍"
          />
          <div className='article'>
            
            <div className='article--media'>
              
              </div>
              
              
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default PersonalSection;
