// const BASE_URL = 'http://localhost:3000';
const BASE_URL = '';

class auth {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Произошла ошибка: ' + res.status);
  }

  register({ email, password, name }) {
    return fetch(`${BASE_URL}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => this._checkResponse(res));
  }

  login({ password, email }) {
    return fetch(`${BASE_URL}/api/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => this._checkResponse(res));
  }

  logOut() {
    return fetch(`${BASE_URL}/api/signout`, {
      credentials: 'include',
    })
  }

  getMe() {
    return fetch(`${BASE_URL}/api/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      });
  }

  saveMovie(movieData) {
    return fetch(`${BASE_URL}/api/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => this._checkResponse(res))
  }

  getSavedMovies() {
    return fetch(`${BASE_URL}/api/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }

  deleteMovie(id) {
    return fetch(`${BASE_URL}/api/movies/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => this._checkResponse(res));
  }

  updateMe({ email, name }) {
    return fetch(`${BASE_URL}/api/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
      }),
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    });
  } 
}

const Auth = new auth();

export default Auth;