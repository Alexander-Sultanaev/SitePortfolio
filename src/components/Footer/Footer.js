import React from 'react';
import GitProfile from "../../images/git-profile.svg"

const Footer = () => {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; Александр Султанаев</p>
      <div className='footer__container'>
        <a href='https://github.com/Alexander-Sultanaev' target='blank'><img alt='GitHub' src={GitProfile}></img></a>
      </div>
    </footer>
  );
}
export default Footer