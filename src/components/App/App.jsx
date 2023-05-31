import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';

import Main from '../Main/Main'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFoundRoute from '../NotFoundRoute/NotFoundRoute';
import Menu from '../Menu/Menu';

function App() {
  const [isWindowSmall, setIswindowSmall] = useState(false)
  const [onMain, setOnMain] = useState(false)
  const [onMovies, setOnMovies] = useState(false)
  const [onSavedMovies, setOnSavedMovies] = useState(false)
  const [onProfile, setOnProfile] = useState(false)
  const [onAuthOrNotFound, setOnAuthOrNotFound] = useState(false)

  const [isMenuActive, setIsMenuActive] = useState(false)

  useEffect(() => {
    window.innerWidth <= 990 ? setIswindowSmall(true) : setIswindowSmall(false);
    window.addEventListener('resize', handleWindowSizeChange);
  }, [])

  const handleWindowSizeChange = () => {
    window.innerWidth <= 990 ? setIswindowSmall(true) : setIswindowSmall(false);
    setIsMenuActive(isWindowSmall ? isMenuActive : false);
  };

  const setAllPagesOff = () => {
    setOnMain(false)
    setOnMovies(false)
    setOnSavedMovies(false)
    setOnProfile(false)
    setOnAuthOrNotFound(false)
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className='page'>
        <Header
          onMain={onMain}
          onMoviesOrProfile={onMovies || onSavedMovies || onProfile}
          onOther={onAuthOrNotFound}
          isMenuButton={isWindowSmall}
          setMenuOpen={setIsMenuActive}
        />
        <Routes>
          <Route
            path='/'
            element={(
              <Main
                setAllPagesOff={setAllPagesOff}
                setOnMain={setOnMain}
              />
            )}
          />
          <Route
            path='/movies'
            element={(
              <Movies
                setAllPagesOff={setAllPagesOff}
                setOnMovies={setOnMovies}
              />
            )}
          />
          <Route
            path='/saved-movies'
            element={(
              <SavedMovies
                setAllPagesOff={setAllPagesOff}
                setOnSavedMovies={setOnSavedMovies}
                onSavedMovies={onSavedMovies}
              />
            )}
          />
          <Route
            path='/profile'
            element={(
              <Profile
                setAllPagesOff={setAllPagesOff}
                setOnProfile={setOnProfile}
              />
            )}
          />
          <Route
            path='/signin'
            element={(
              <Login
                setAllPagesOff={setAllPagesOff}
                setOnLogin={setOnAuthOrNotFound}
              />
            )}
          />
          <Route
            path='/signup'
            element={(
              <Register
                setAllPagesOff={setAllPagesOff}
                setOnRegister={setOnAuthOrNotFound}
              />
            )}
          />
          <Route
            path='*'
            element={(
              <NotFoundRoute
                setAllPagesOff={setAllPagesOff}
                setOnNotFoundRoute={setOnAuthOrNotFound}
              />
            )}
          />
        </Routes>
        <Footer
          onProfile={onProfile}
          onAuthOrNotFound={onAuthOrNotFound}
        />
        <Menu
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          onMain={onMain}
          onMovies={onMovies}
          onSavedMovies={onSavedMovies}
        />
      </div>
    </div>
  );
}

export default App;
