import React from 'react';

const Article2 = () => {
  return (
    <article className=' section-article section-item'>
      <div>
        <img
          className='section-img'
          src='./public/mobile-N.jpg'
          alt='mob-img'
        />
      </div>
      <div className='hero-text section-text'>
        <h1>Download your shows to watch offline.</h1>
        <h3>Save your favorites easily and always have something to watch.</h3>
      </div>
      {/* <div className='loading'>
        <div className='loading-item'>
          <img src='./public/boxshot.png' alt='' className='loading-img img' />
          <div className='loading-text'>
            <h3>Stranger Things</h3>
            <h3>Downloading...</h3>
          </div>
          <img
            src='./public/download-icon.gif'
            alt='download-icon'
            className='loading-img img'
          />
        </div>
      </div> */}
    </article>
  );
};

export default Article2;
