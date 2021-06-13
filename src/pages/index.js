import * as React from 'react';
import Header from '../components/organisms/Header';
import Seo from '../components/organisms/Seo';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Header />
      </main>
    </>
  );
};

export default IndexPage;
