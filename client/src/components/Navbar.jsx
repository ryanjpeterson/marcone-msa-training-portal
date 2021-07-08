import React from 'react';

function Navbar() {
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
      </div>
    </nav>
  );
}

export default Navbar;
