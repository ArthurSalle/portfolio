import React from 'react';
import favicon from '../../images/favicon.ico';
import ogImg from '../../images/og.png';
import { Helmet } from 'react-helmet';

const Seo = () => {
  const faviconLink = [
    { rel: 'icon', type: 'image/ico', sizes: '32x32', href: favicon },
  ];

  const title = 'Arthur Sallé | Portfolio';

  const description =
    'Arthur Sallé, développeur frontend, basé à Nantes et formé à la Wild Code School. Fan de la JAMstack, du CSS, des animations et attiré par le rendu visuel, j’aime coder des sites mêlant design, animations et optimisation.';

  const url = 'https://arthur-salle.fr/';

  return (
    <Helmet htmlAttributes={{ lang: 'fr' }} link={faviconLink}>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImg} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={ogImg} />
    </Helmet>
  );
};

export default Seo;
