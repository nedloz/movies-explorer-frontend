import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Profile.css';
import CurrentUserContext from '../../utils/Contexts/CurrentUserContext';
import Api from '../../utils/Api/MainApi';
import {
  emailPattern,
  namePattern,
  authCentralErrorText,
  userDataChangedText,
  doubleEmailRegisterErrorText,
  doubleDataErrorText,
} from '../../utils/constants';


function Profile({
  setOnProfile,
  setAllPagesOff,
  setCurrentUser,
  setLoggedIn,
}) {
  const navigate = useNavigate();
  const currentUser = useContext(CurrentUserContext);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm({
    values: {
      name: currentUser.name,
      email: currentUser.email,
    },
  });

  const [isErrorInForm, setIsErrorInForm] = useState(errors.name || errors.email);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const [profileErrorText, setProfileErrorText] = useState(null);
  const [profileGoodNewsText, setProfileGoodNewsText] = useState(null);

  const formConfig = {
    name: {
      pattern: namePattern,
      onChange: (e) => {
        setProfileGoodNewsText('')
        setIsSubmitButtonDisabled(false)
        if (e.target.value === currentUser.name) {
          setIsSubmitButtonDisabled(true);
        };
      },
      validate: (value, formValues) => (
        value !== currentUser.name || formValues.email !== currentUser.email
      ),
    },
    email: {
      pattern: emailPattern,
      onChange: (e) => {
        setProfileGoodNewsText('');
        setIsSubmitButtonDisabled(false);
        if (e.target.value === currentUser.email) {
          setIsSubmitButtonDisabled(true);
        };
      },
      validate: (value, formValues) => (
        value !== currentUser.email || formValues.name !== currentUser.name
      ),
    },
  };

  useEffect(() => {
    setAllPagesOff();
    setOnProfile(true);
  });

  useEffect(() => {
    setProfileGoodNewsText('')
    setProfileErrorText('');
    const isError = errors.name || errors.email;
    setIsErrorInForm(isError);
    setProfileErrorText(isError ? authCentralErrorText : '');
  }, [errors.name, errors.email]);

  useEffect(() => {
    setIsSubmitButtonDisabled(true);
    setProfileErrorText('');
  }, []);

  const handleProfileSubmit = () => {
    const { name, email } = getValues();
    if (name === currentUser.name && email === currentUser.email) {
      setProfileGoodNewsText('')
      setProfileErrorText(doubleDataErrorText);
      return;
    };
    Api.updateMe({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setProfileGoodNewsText(userDataChangedText);
        setIsSubmitButtonDisabled(true)
      })
      .catch((err) => {
        if (err === 409) {
          setProfileErrorText(doubleEmailRegisterErrorText);
          setIsSubmitButtonDisabled(false);
          return;
        }
        setIsSubmitButtonDisabled(false);
        setProfileErrorText(authCentralErrorText);
      });
  };

  const handleLogOut = () => {
    Api.logOut()
      .then(() => {
        localStorage.removeItem('movies-cards')
        localStorage.removeItem('search-text')
        localStorage.removeItem('is-movies-short-state')
        setCurrentUser({});
      })
      .then(() => {
        navigate('/');
        setLoggedIn(false);
      })
      .catch((err) => {
        setProfileErrorText(authCentralErrorText);
      });
  };

  return (
    <form
      className='profile'
      name='profile'
      onSubmit={handleSubmit(handleProfileSubmit)}
    >
      <p className='profile__title'>{`Привет, ${currentUser.name}!`}</p>
      <div className='profile__container'>
        <div className='profile__info-container'>
          <p className='profile__info-title'>Имя</p>
          <input
            className='profile__info-input'
            type='text'
            name='name'
            {...register('name', formConfig.name)}
          />
        </div>
        <div className='profile__line' />
        <div className='profile__info-container'>
          <p className='profile__info-title'>E-mail</p>
          <input
            className='profile__info-input'
            type='text'
            name='email'
            {...register('email', formConfig.email)}
          />
        </div>
        <span className={'profile__error' + (profileGoodNewsText ? ' profile__good-error ' : '')} >{profileGoodNewsText || profileErrorText}</span>
      </div>
      <button
        type='submit'
        className={'profile__submit-button' +
          (isErrorInForm || isSubmitButtonDisabled ? ' profile__submit-button_disabled' : '')}
        disabled={isErrorInForm || isSubmitButtonDisabled ? true : false}
      >Редактировать</button>
      <Link className='profile__logout-link' onClick={handleLogOut} >Выйти из аккаунта</Link>
    </form>
  );
};

export default Profile;
