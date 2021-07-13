import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import { useDataLayerValue } from '../../context/DataLayer';

import FormInput from '../../components/FormInput/FormInput';

import './AdminSignInPage.css';

function AdminSignInPage() {
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
    <div className="form-container">
      <h1>Admin Sign In</h1>
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
