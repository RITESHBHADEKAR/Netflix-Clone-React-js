import React from 'react';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-item'>
          <div class='hero-text'>
            <h1 >Unlimited movies, TV <br /> shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>
          <form className='hero-btns'>
            <input
              type='email'
              name='email'
              id='email'
              required
              className='btn'
              placeholder='Email address'
              style={{ background: 'white' }}
            />
            <button className='btn getbtn' >
              <span>Get Started</span>
              <img className='next-btn' src='next.png' alt='next' />
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
