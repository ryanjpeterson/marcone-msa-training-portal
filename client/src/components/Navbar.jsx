import React from 'react';
import { useHistory } from 'react-router';
import { useDataLayerValue } from '../context/DataLayer';

function Navbar() {
  const [{ adminUser }, dispatch] = useDataLayerValue();
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.removeItem('adminUser');
    dispatch({ type: 'LOGOUT_ADMIN_USER' });
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
        <a
          href="https://www.msaworld.com/Members/Webinar"
          className="nav-link"
          target="_blank"
          rel="noreferrer"
        >
          Past Webinars
        </a>
        {adminUser && (
          <div className="nav-link" onClick={handleLogout}>
            Log Out
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
