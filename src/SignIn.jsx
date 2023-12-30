import React from 'react';
import Navbar from './Navbar';

const SignIn = () => {
  return (
    <>
      <Navbar />
      {/* hero */}
      <section className='hero Sign-In-hero'>
        <article className='login-form'>
          <form className='login'>
            <h1>Sign In</h1>

            <input
              type='email'
              name='Email' required
              className=' login-inputs'
              placeholder='Email or phone number'
            />
            <input
              type='password' required maxLength={8} inputMode='text'
              name='password'
              className='login-inputs'
              placeholder='Password'
            />
            <button type='submit' className='btn submit-btn login-inputs'>
              Sign In
            </button>
            <div className='login-texts'>
              <div className='flex'>
                <div className='flex'>
                  <input type='checkbox' required  name='checkbox' />
                  <p>Remember me</p>
                </div>
                <p>Need help?</p>
              </div>
              <div className='flex'>
                <p>New to Netflix?</p>
                <a href=''>Sign up now</a>
              </div>
            </div>
          </form>
        </article>
      </section>
      {/* footer */}
      <footer className='footer login-footer'>
        <p>
          Questions? Call :<a href='tel 000-800-040-1843'> 000-800-040-1843</a>
        </p>
        <div className='footer-items'>
          <div>
            <ul>
              <li>
                <a href='https://help.netflix.com/en/node/412'>
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a href='https://ir.netflix.net/ir-overview/profile/default.aspx'>
                  <span>Investor Relations</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href='https://help.netflix.com/en/'>
                  <span>Help Centre</span>
                </a>
              </li>
              <li>
                <a href='https://jobs.netflix.com/'>
                  <span>Jobs</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href='https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'>
                  <span>Account</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href='https://media.netflix.com/en/'>
                  <span>Media Centre</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SignIn;
