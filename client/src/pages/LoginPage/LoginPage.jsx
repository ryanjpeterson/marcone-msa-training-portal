import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import FormInput from '../../components/FormInput/FormInput';
import './LoginPage.css';

function LoginPage() {
  const { currentUser, login } = useAuth();
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    error !== '' && setError('');
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    try {
      await login(email, password);
      history.push('/post');
    } catch (err) {
      setError(err.message);
    }
  };

  const { email, password } = credentials;

  return (
    <>
      {currentUser && history.push('/')}
      <div className="form-container">
        <h1>Login</h1>
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
    </>
  );
}

export default LoginPage;
