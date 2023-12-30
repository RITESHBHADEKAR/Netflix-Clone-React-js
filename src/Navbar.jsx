import React, { useState } from 'react';
import App from './App';
import SignIn from './SignIn';

const Navbar = () => {
  // const [signup, login] = useState(false);
  // const SignIn = () => {
  //   login(!signup);
  // };
  return (
    <nav className='navbar '>
      <div className='navbar-nav'>
        <div>
          <img src='Netflix-Logo.png' alt='logo' className='Netflix-logo' />
        </div>
        <div className='buttons'>
          {/* languages */}
          <button type='button' className='btn lang-btn'>
            <span>
              <img
                className='internet-img img'
                src='./public\internet.png'
                alt=''
              />
            </span>
            <select name='language' id='lang'>
              <option value='ENGLISH'>ENGLISH</option>
              <option value='हिंदी'>हिंदी</option>
            </select>
          </button>
          <button type='button' onClick={SignIn} className='btn'>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
