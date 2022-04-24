import { useState } from 'react';

import './MobileHamburger.css';

export default function MobileHamburger() {
  const [isActive, setActive] = useState(false);

  return (
    <button
      type="button"
      className={`hamburger block md:hidden${isActive ? ' open' : ''}`}
      onClick={() => setActive(!isActive)}
    >
      <span className="hamburger-top bg-white" />
      <span className="hamburger-middle bg-white" />
      <span className="hamburger-bottom bg-white" />
    </button>
  );
}
