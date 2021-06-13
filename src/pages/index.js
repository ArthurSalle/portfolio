import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/organisms/Header';
import '../styles/index.scss';
import favicon from '../images/favicon.ico';

const IndexPage = () => {
  const faviconLink = [
    { rel: 'icon', type: 'image/ico', sizes: '32x32', href: favicon },
  ];

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'fr' }} link={faviconLink}>
        <meta charSet='utf-8' />
        <title>Arthur Sallé | Portfolio</title>
      </Helmet>
      <main>
        <Header />
      </main>
    </>
  );
};

export default IndexPage;
