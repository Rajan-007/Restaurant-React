import React from 'react';

import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';

const Header = () => (
  <div className='app__header app__wrapper section__padding'id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className='p__opensans' style={{margin : "2rem 0" }}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officia ab est? Cum, possimus. Consequatur odio fuga praesentium iure explicabo! </p>
      <button type='button'className='custom__button'>Explore menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
