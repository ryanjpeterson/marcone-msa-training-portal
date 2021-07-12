import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import { useDataLayerValue } from '../../context/DataLayer';
import './SignInPage.css';

function SignInPage() {
  const [dispatch] = useDataLayerValue();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        sessionStorage.setItem('adminUser', JSON.stringify(res.user));
        dispatch({ type: 'SET_ADMIN_USER', adminUser: res.user });
      })
      .catch((err) => alert(err.code));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const { email, password } = credentials;

  return (
    <div>
      {/* <form className="sign-in__form" onSubmit={handleSubmit}>
        <input
          className="sign-in__input"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className="sign-in__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <button
          className="btn sign-in__btn"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form> */}
      Admin Sign In Page
    </div>
  );
}

export default SignInPage;
