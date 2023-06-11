import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import MainPage from '../Main/Main'
import HeaderPage from '../Header/Header';
import FooterPage from '../Footer/Footer';
import MoviesPage from '../Movies/Movies';
import SavedMoviesPage from '../SavedMovies/SavedMovies';
import ProfilePage from '../Profile/Profile';
import LoginPage from '../Login/Login';
import RegisterPage from '../Register/Register';
import NotFoundRoutePage from '../NotFoundRoute/NotFoundRoute';
import MenuPage from '../Menu/Menu';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Api from '../../utils/Api/MainApi';
import CurrentUserContext from '../../utils/Contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [isWindowSmall, setIswindowSmall] = useState(false);
  const [onMain, setOnMain] = useState(false);
  const [onMovies, setOnMovies] = useState(false);
  const [onSavedMovies, setOnSavedMovies] = useState(false);
  const [onProfile, setOnProfile] = useState(false);
  const [onAuthOrNotFound, setOnAuthOrNotFound] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
      Api.getMe()
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => {
          setLoggedIn(false);
        });
  }, []);

  useEffect(() => {
    window.innerWidth <= 990 ? setIswindowSmall(true) : setIswindowSmall(false);
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);

  const handleWindowSizeChange = () => {
    window.innerWidth <= 990 ? setIswindowSmall(true) : setIswindowSmall(false);
    setIsMenuActive(isWindowSmall ? isMenuActive : false);
  };

  const setAllPagesOff = () => {
    setOnMain(false);
    setOnMovies(false);
    setOnSavedMovies(false);
    setOnProfile(false);
    setOnAuthOrNotFound(false);
  };

  const handleLogin = (res) => {
    setCurrentUser(res);
    setLoggedIn(true);
    navigate('/movies');
  };

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <div style={{ backgroundColor: 'white' }}>
        <div className='page'>
          <HeaderPage
            onMain={onMain}
            onMoviesOrProfile={onMovies || onSavedMovies || onProfile}
            onOther={onAuthOrNotFound}
            isMenuButton={isWindowSmall}
            setMenuOpen={setIsMenuActive}
            loggedIn={loggedIn}
          />
          <Routes>
            <Route
              path='/'
              element={(
                <MainPage
                  setAllPagesOff={setAllPagesOff}
                  setOnMain={setOnMain}
                />
              )}
            />
            <Route
              path='/movies'
              element={(
                <ProtectedRoute
                  element={MoviesPage}
                  loggedIn={loggedIn}
                  setAllPagesOff={setAllPagesOff}
                  setOnMovies={setOnMovies}
                />
              )}
            />
            <Route
              path='/saved-movies'
              element={(
                <ProtectedRoute
                  element={SavedMoviesPage}
                  loggedIn={loggedIn}
                  setAllPagesOff={setAllPagesOff}
                  setOnSavedMovies={setOnSavedMovies}
                  onSavedMovies={onSavedMovies}
                />
              )}
            />
            <Route
              path='/profile'
              element={(
                <ProtectedRoute
                  element={ProfilePage}
                  loggedIn={loggedIn}
                  setAllPagesOff={setAllPagesOff}
                  setOnProfile={setOnProfile}
                  setCurrentUser={setCurrentUser}
                  setLoggedIn={setLoggedIn}
                />
              )}
            />
            <Route
              path='/signin'
              element={(
                <LoginPage
                  setAllPagesOff={setAllPagesOff}
                  setOnLogin={setOnAuthOrNotFound}
                  onLogin={handleLogin}
                />
              )}
            />
            <Route
              path='/signup'
              element={(
                <RegisterPage
                  setAllPagesOff={setAllPagesOff}
                  setOnRegister={setOnAuthOrNotFound}
                  onLogin={handleLogin}
                />
              )}
            />
            <Route
              path='*'
              element={(
                <NotFoundRoutePage
                  setAllPagesOff={setAllPagesOff}
                  setOnNotFoundRoute={setOnAuthOrNotFound}
                />
              )}
            />
          </Routes>
          <FooterPage
            onProfile={onProfile}
            onAuthOrNotFound={onAuthOrNotFound}
          />
          <MenuPage
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
            onMain={onMain}
            onMovies={onMovies}
            onSavedMovies={onSavedMovies}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
