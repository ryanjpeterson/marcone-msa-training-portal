import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
    history.push('/');
  };

  return (
    <nav>
      <a href="http://www.marcone.com" target="_blank" rel="noreferrer">
        <img
          className="nav-brand"
          src="https://firebasestorage.googleapis.com/v0/b/marcone-msa-training-portal.appspot.com/o/marcone-m-white.png?alt=media&token=e893387a-488f-45f7-8585-6c3179bab70f"
          alt=""
        />
      </a>
      <div className="nav-content">
        {!currentUser && (
          <a
            href="https://www.msaworld.com/Members/Webinar"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            Past Webinars
          </a>
        )}
        {currentUser && (
          <Link to="/post" className="nav-link">
            Post
          </Link>
        )}
        {currentUser && (
          <div className="nav-link" onClick={handleLogout}>
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
