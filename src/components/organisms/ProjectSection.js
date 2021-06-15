import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Button from '../atoms/Button';
import Paragraph from '../atoms/Paragraph';
import Title from '../atoms/Title';
import SectionTitle from '../molecules/SectionTitle';

const ProjectSection = () => {
  return (
    <section className='container'>
      <SectionTitle type='h2' text='Projets 💻' />
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Polenta & Linen</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique ut, odio a magnam ratione hic! Rem ea atque vel
              explicabo.
            </Paragraph>
          </div>

          <div>
            <div>
              <Button children='GitHub' />
              <Button children='Live' />
            </div>
            <div>
              <Button children='NextJS' />
              <Button children='Contentful' />
              <Button children='TypeScript' />
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/food.png'
            alt='Arthur Sallé'
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </div>
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Polenta & Linen</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique ut, odio a magnam ratione hic! Rem ea atque vel
              explicabo.
            </Paragraph>
          </div>

          <div>
            <div>
              <Button children='GitHub' />
              <Button children='Live' />
            </div>
            <div>
              <Button children='NextJS' />
              <Button children='Contentful' />
              <Button children='TypeScript' />
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/food.png'
            alt='Arthur Sallé'
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </div>
      <div className='project--line__small'></div>
      <div className='project'>
        <div className='project--row'>
          <div className='project--content'>
            <Title type='h3'>Polenta & Linen</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique ut, odio a magnam ratione hic! Rem ea atque vel
              explicabo.
            </Paragraph>
          </div>

          <div>
            <div>
              <Button children='GitHub' />
              <Button children='Live' />
            </div>
            <div>
              <Button children='NextJS' />
              <Button children='Contentful' />
              <Button children='TypeScript' />
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/food.png'
            alt='Arthur Sallé'
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
