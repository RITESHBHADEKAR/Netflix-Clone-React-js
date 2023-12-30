import React from 'react';
import Article1 from './src/Article1';
import Article2 from './src/Article2';
import Article3 from './src/Article3';
import Article4 from './src/Article4';

const Home = () => {
  return (
    <section className='articles '>
        <Article1  />
        <Article2/>
        <Article3/>
        <Article4/>
    </section>
  );
};

export default Home;
