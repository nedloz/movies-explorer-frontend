import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile({
  setOnProfile,
  setAllPagesOff,
}) {

  useEffect(() => {
    setAllPagesOff();
    setOnProfile(true);
  });

  return (
    <div className='profile'>
        <p className='profile__title'>Привет, Виталий!</p>
        <div className='profile__container'>
          <div className='profile__info-container' >
            <p className='profile__info-title'>Имя</p>
            <p className='profile__info-value'>Виталий</p>
          </div>
          <div className='profile__line' />
          <div className='profile__info-container' >
            <p className='profile__info-title'>E-mail</p>
            <p className='profile__info-value'>emai@email.com</p>
          </div>
        </div>
        <Link className='profile__link profile__link_type_change-info' to='' >Редактировать</Link>
        <Link className='profile__link profile__link_type_logout' to='/' >Выйти из аккаунта</Link>
    </div>
  )
};

export default Profile;
