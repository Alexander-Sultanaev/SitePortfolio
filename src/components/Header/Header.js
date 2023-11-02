import React from 'react';
import { Link } from 'react-scroll';
import GitProfile from "../../images/git-profile.svg"
const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <ul className='header__nav'>
          <li className="header__item">        
            <Link className="header__link" to="techs" smooth={true} duration={1000}>Стек технологий</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="projects" smooth={true} duration={1000}>Портфолио</Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="contacts" smooth={true} duration={1000}>Контакты</Link>
          </li>
        </ul>
        <a href='https://github.com/Alexander-Sultanaev' target='_blank' rel="noopener noreferrer"><img className='header__pic' alt='GitHub' src={GitProfile}></img></a>
      </div>
      <div className='header__content'>
        <h1 className='header__title'>Привет <span role='img' aria-label="donut">👋</span>,Меня зовут Александр я фронтенд разработчик</h1>
        <div className='header__photo'>тут будет фото</div>
      </div>
    </header>
  );
}
export default Header