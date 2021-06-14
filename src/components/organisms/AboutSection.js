import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Paragraph from '../atoms/Paragraph';
import SectionTitle from '../molecules/SectionTitle';

const SectionList = () => {
  return (
    <section className='container'>
      <SectionTitle type='h2' text='À propos 🍕' />
      <div className='section'>
        <div className='section--article'>
          <Paragraph className='section--drop'>
            Après une ignition au développement en suivant quelques tutos sur
            HTML et CSS j’ai tout de suite accroché, j’ai adoré avoir un rendu
            concret en si peu de temps et en tapant quelques lignes de code.
            Depuis, le CSS from-scratch est surement l’une des choses que je
            préfères, je suis en train de découvrir comment le rendre dynamique
            avec des bibliothèques d’animations tels que AnimeJs et GSAP.
          </Paragraph>
          <Paragraph className='section--drop'>
            Lors d’un projet client en collaboration avec un développeur
            Freelance, j’ai découvert la JAMStack, ce fut une grande révélation,
            créer un site fonctionnel au design parfait et optimisé était une
            expérience qui a conforté mon choix de m’orienter vers le
            développement frontend. Depuis je ne cesse de renforcer mes bases en
            HTML, CSS, JS et React, tout en testant de nouvelles technos comme
            TypeScript, NextJs, Gatsby, des headless CMS et Tailwind.
          </Paragraph>
          <Paragraph>
            Plus tard j’aimerais toucher à la 3D avec ThreeJs et le WebGl pour
            pousser mes connaissances dans tous ce qui touche aux animations et
            aux interactions créatives !
          </Paragraph>
        </div>

        <div className='section--media'>
          <div className='section--img__wrapper'>
            <StaticImage
              src='../../images/arthur.png'
              alt='Arthur Sallé'
              width={352}
              height={235}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionList;
