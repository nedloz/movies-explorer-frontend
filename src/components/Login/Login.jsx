import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Login.css';
import logo from '../../images/logo.svg';
import Api from '../../utils/Api/MainApi';
import {
  emailPattern,
  authCentralErrorText
} from '../../utils/constants';

const formConfig = {
  email: {
    required: true,
    pattern: emailPattern,
  },
  password: {
    required: true,
  },
};

function Login({
  setOnLogin,
  setAllPagesOff,
  onLogin,
}) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const [isErrorInForm, setIsErrorInForm] = useState(errors.email || errors.password);
  const [loginErrorText, setLoginErrorText] = useState(null);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

  useEffect(() => {
    setAllPagesOff();
    setOnLogin(true);
  });

  useEffect(() => {
    const isError = errors.email || errors.password;
    setIsErrorInForm(isError);
    setLoginErrorText(isError ? authCentralErrorText : '');
  }, [errors.email, errors.password]);

  const handleLoginSubmit = () => {
    const values = getValues();
    setIsSubmitButtonDisabled(true);
    Api.login(values)
      .then(onLogin)
      .catch(() => {
        setLoginErrorText(authCentralErrorText);
        setIsSubmitButtonDisabled(false);
      });
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src={logo}
          className='login__logo'
          alt='логотип'
          onClick={() => navigate('/')}
        />
        <p className='login__title'>Рады видеть!</p>
        <form
          className='login__form'
          name='login'
          onSubmit={handleSubmit(handleLoginSubmit)}
          autoComplete='off'
        >
          <label>
            <span className='login__input-name'>E-mail</span>
            <input
              {...register('email', formConfig.email)}
              className='login__input'
              type='text'
              name='email'
            />
          </label>
          <label>
            <span className='login__input-name'>Пароль</span>
            <input
              {...register('password', formConfig.password)}
              className='login__input'
              type='password'
              name='password'
            />
          </label>
          <span className='login__error'>{loginErrorText}</span>
          <input
            type='submit'
            value='Войти'
            className={'login__submit-button' +
              (isErrorInForm || isSubmitButtonDisabled ? ' login__submit-button_inactive' : '')}
            disabled={isErrorInForm || isSubmitButtonDisabled ? true : false}
          />
        </form>
        <p className='login__footer-text' >Ещё не зарегистрированы? <Link className='login__footer-link' to='/signup' >Регистрация</Link></p>
      </div>
    </div>
  );
};

export default Login;
