import React from 'react';
import GitProfile from "../../../images/git-profile.svg"
const ProjectsCard = () => {
  return (
        <li className='projects-card'>
          <h3 className='projects-card__title'>Дипломный проект Яндекс Практикума</h3>
          <p className='projects-card__description'>Многостраничный сайт по поиску фильмов с регистрацией и авторизацией пользователей. Адаптивен для всех типов устройств!</p>
          <p className='projects-card__techs'>Стек технологий: css,  react,  html5,  javascript </p>
          <a className='projects-card__link' href='https://github.com/Alexander-Sultanaev/movies-explorer-full'><img className='projects-card__pic' alt='' src={GitProfile}></img>View Code</a>
        </li>
  );
}
export default ProjectsCard