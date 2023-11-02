import React from 'react';
import TelegramLink from '../../images/telegram-link.png'
import VkLink from '../../images/vk-svgrepo-com.svg'

const Contacts = () => {
  return (
    <footer className='contacts'>
      <h2 className="contacts__title">Контакты</h2>
      <ul className='contacts__list'>
        <li className='contacts__item'>
          <a className='contacts__link' href='https://vk.com/sultanaev_al' target='_blank' rel="noopener noreferrer">
            <img className='contacts__image' alt='Контакт' src={VkLink}></img>
            <p className='contacts__text'>В Контакте</p>
          </a>
        </li>
        <li className='contacts__item'>
          <a className='contacts__link' href='https://t.me/alexandersultanaev' target='_blank' rel="noopener noreferrer">
            <img className='contacts__image' alt='Телеграм' src={TelegramLink}></img>
            <p className='contacts__text'>Телеграм</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Contacts