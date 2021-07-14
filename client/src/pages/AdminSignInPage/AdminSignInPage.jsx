import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import { useDataLayerValue } from '../../context/DataLayer';

import FormInput from '../../components/FormInput/FormInput';

import './AdminSignInPage.css';

function AdminSignInPage() {
  const [{ adminUser }, dispatch] = useDataLayerValue();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        sessionStorage.setItem(
          'adminUser',
          JSON.stringify(userCredential.user)
        );
        dispatch({ type: 'SET_ADMIN_USER', adminUser: userCredential.user });
      })
      .catch((err) => setError(err.message));
  };

  const handleChange = (e) => {
    error !== '' && setError('');
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const { email, password } = credentials;

  return (
    <div className="form-container">
      <h1>Admin Sign In</h1>
      {error && <p className="form-error">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button className="form-btn" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AdminSignInPage;
