import React from 'react';

function Header() {
  return (
    <header>
      <a href="http://www.msaworld.com">
        <img
          className="header-img"
          src="https://firebasestorage.googleapis.com/v0/b/marcone-msa-training-portal.appspot.com/o/msa-logo.png?alt=media&token=64db643b-6247-45e4-bc97-5a46ab6204bd"
          alt=""
        />
      </a>
      <h1 className="header-title">Upcoming MSA Webinars</h1>
      <p>
        Click <span className="bold">Register Now!</span> to visit the{' '}
        <span className="bold">GoToWebinar</span> registration page for the
        selected event. Make sure you choose the correct session time from the
        dropdown menu when registering. Contact{' '}
        <a
          className="header-email_address bold"
          href="mailto:ryan.peterson@marcone.com"
        >
          ryan.peterson@marcone.com
        </a>{' '}
        if you have any issues when registering.
      </p>

      <div className="header-pricing">
        <i className="bi bi-question-circle-fill"></i>
        <p>
          Registration is <span className="bold">free for MSA members</span> and{' '}
          <span className="bold">$24.99</span> for non-members. First time
          attendees can take advantage of our free 'Try Before You Buy' option.
          Ask your Marcone representative for more information.
        </p>
      </div>
    </header>
  );
}

export default Header;
