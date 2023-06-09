import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import './Register.css';
import logo from '../../images/logo.svg';
import Api from '../../utils/Api/MainApi';
import {
  emailPattern,
  namePattern,
  authCentralErrorText,
  doubleEmailRegisterErrorText,
} from '../../utils/constants';

const formConfig = {
  name: {
    required: true,
    pattern: namePattern,
  },
  email: {
    required: true,
    pattern: emailPattern,
  },
  password: {
    required: true,
  },
};

function Register({
  setOnRegister,
  setAllPagesOff,
  onLogin,
}) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const [isErrorInForm, setIsErrorInForm] = useState(errors.name || errors.email || errors.password);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [registerErrorText, setRegisterErrorText] = useState(null);

  useEffect(() => {
    setAllPagesOff();
    setOnRegister(true);
  });

  useEffect(() => {
    setIsSubmitButtonDisabled(false);
    setRegisterErrorText('');
  }, []);

  useEffect(() => {
    const isError = errors.name || errors.email || errors.password;
    setIsErrorInForm(isError);
    setRegisterErrorText(isError ? authCentralErrorText : '');
  }, [errors.name, errors.email, errors.password]);

  const handleRegisterSubmit = () => {
    const values = getValues();
    const { email, password } = values;
    setIsSubmitButtonDisabled(true);
    Api.register(values)
      .then(() => {
        Api.login({ email, password })
          .then(onLogin)
          .catch(() => setRegisterErrorText(authCentralErrorText));
      })
      .catch((error) => {
        setIsSubmitButtonDisabled(false);
        if (error === 409) {
          setRegisterErrorText(doubleEmailRegisterErrorText);
          return;
        };
        setRegisterErrorText(authCentralErrorText);
      });
  };

  return (
    <div className='register'>
      <div className='register__container'>
        <img
          className='register__logo'
          src={logo}
          alt='логотип'
          onClick={() => navigate('/')}
        />
        <p className='register__title'>Добро пожаловать!</p>
        <form
          className='register__form'
          name='register'
          onSubmit={handleSubmit(handleRegisterSubmit)}
        >
          <label>
            <span className='register__input-name'>Имя</span>
            <input
              {...register('name', formConfig.name)}
              className='register__input'
              name='name'
              type='text'
            />
          </label>
          <label>
            <span className='register__input-name'>E-mail</span>
            <input
              {...register('email', formConfig.email)}
              className='register__input'
              name='email'
              type='text'
            />
          </label>
          <label>
            <span className='register__input-name'>Пароль</span>
            <input
              {...register('password', formConfig.password)}
              className='register__input'
              name='password'
              type='password'
            />
          </label>
          <span className='register__error' >{registerErrorText}</span>
          <input
            className={'register__submit-button' + (isErrorInForm || isSubmitButtonDisabled ? ' register__submit-button_inactive' : '')}
            disabled={isErrorInForm || isSubmitButtonDisabled ? true : false}
            type='submit'
            value='Зарегистрироваться'
          />
        </form>
        <p className='register__footer-text' >Уже зарегистрированы? <Link className='register__footer-link' to='/signin' >Войти</Link></p>
      </div>
    </div>
  );
};

export default Register;
