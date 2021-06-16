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
            <div className='project--link'>
              <Button
                children={
                  <a
                    href='https://github.com/ArthurSalle/polenta-linen'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    GitHub{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
              <Button
                children={
                  <a
                    href='https://polenta-linen.vercel.app/'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    Live{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
            </div>
            <div className='project--link'>
              <button className='project--tag'>NextJs</button>
              <button className='project--tag'>Contentful</button>
              <button className='project--tag'>TypeScript</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/food2.png'
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
            <Title type='h3'>Space Protection of Alien</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique ut, odio a magnam ratione hic! Rem ea atque vel
              explicabo.
            </Paragraph>
          </div>

          <div>
            <div className='project--link'>
              <Button
                children={
                  <a
                    href='https://github.com/ArthurSalle/space-protection-alien'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    GitHub{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
              <Button
                children={
                  <a
                    href='https://spaceportectionofalien.netlify.app/'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    Live{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
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
            <Title type='h3'>Magnolia In Nantes</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique ut, odio a magnam ratione hic! Rem ea atque vel
              explicabo.
            </Paragraph>
          </div>

          <div>
            <div className='project--link'>
              <Button
                children={
                  <a
                    href='https://github.com/ArthurSalle/nts-js-202103-p2-herbier'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    GitHub{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
              <Button
                children={
                  <a
                    href='https://magnoliafornantes.netlify.app/'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    Live{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
            </div>
            <div className='project--link'>
              <button className='project--tag'>ReactJs</button>
              <button className='project--tag'>Leaflet</button>
              <button className='project--tag'>FireBase</button>
            </div>
          </div>
        </div>
        <div className='project--img__wrapper'>
          <StaticImage
            src='../../images/magnolia.png'
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
            <Title type='h3'>4 Spririted Guys</Title>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique ut, odio a magnam ratione hic! Rem ea atque vel
              explicabo.
            </Paragraph>
          </div>

          <div>
            <div className='project--link'>
              <Button
                children={
                  <a
                    href='https://github.com/ArthurSalle/4-spirited-guys'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    GitHub{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
              <Button
                children={
                  <a
                    href='https://4-spirited-guys.netlify.app/'
                    target='blank'
                    className='btn btn--link btn--link__effect'
                  >
                    Live{' '}
                    <span role='img' aria-label='logo flèche'>
                      ↗️
                    </span>
                  </a>
                }
              />
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
