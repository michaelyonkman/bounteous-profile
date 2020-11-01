import React, { useState } from 'react';
import BounteousLogo from '../Bounteous-logo.png';

const Profile = () => {
  const [liveBackground, setLiveBackground] = useState(null);

  const makeLive = () => {
    if (!liveBackground) {
      setLiveBackground('make-live');
    } else {
      setLiveBackground(null);
    }
  };

  return (
    <div className={`${liveBackground} profile-container`}>
      <div className="logo-button-container">
        <img
          src={BounteousLogo}
          className="Bounteous-logo"
          alt="Bounteous logo"
        />
        <button className="follow-button" onClick={makeLive}>
          Follow
        </button>
      </div>
      <div className="profile-text">
        <h2 className="profile-headline-text">Bounteous</h2>
        <h4>
          Content, Commerce, and Coffee -{' '}
          <span className="blue-text">#AEM/CQ5</span>,{' '}
          <span className="blue-text">#Drupal</span>,{' '}
          <span className="blue-text">#Magneto</span>, and{' '}
          <span className="blue-text">#UXDesign</span>
        </h4>
        <h5>
          North America & Europe <span className="bullet">•</span> bounteous.com{' '}
          <span className="bullet">•</span> Joined March 2009
        </h5>
      </div>
    </div>
  );
};

export default Profile;
