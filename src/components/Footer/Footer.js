import React from 'react';


const Footer = () => {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; Александр Султанаев</p>
      <div className='footer__container'>
        <a href='https://github.com/Alexander-Sultanaev' target='blank'><img alt='GitHub'></img></a>
        <a href='https://t.me/alexandersultanaev' target='blank'><img alt='Telegram'></img></a>
        <a href='mailto:malogbal@yandex.ru' target='blank'><img alt='Почта'></img></a>
      </div>
    </footer>
  );
}
export default Footer