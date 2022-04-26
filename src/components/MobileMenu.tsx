import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import MobileHamburger from './MobileHamburger';

export default function MobileMenu() {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isActive) {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [setActive, isActive]);

  const navClasses = [
    'mobile-menu',
    ...(isActive ? [] : ['hidden']),
    'absolute',
    'md:hidden',
    'flex',
    'flex-col',
    'items-center',
    'self-end',
    'p-4',
    'top-full',
    'mt-0',
    'space-y-2',
    'bg-white',
    'sm:w-auto',
    'sm:self-center',
    'right-2',
    'drop-shadow-lg',
    'text-gray-700',
    'border-b-[3px]',
    'border-x-[3px]',
    'border-sky-400',
    'rounded-b',
    'z-10',
  ].join(' ');

  const navItemClasses = [
    'hover:underline',
    'decoration-sky-400',
  ].join(' ');

  const onToggle = () => setActive(!isActive);

  return (
    <>
      <MobileHamburger
        isActive={isActive}
        onToggle={onToggle}
      />

      <nav className={navClasses}>
        <NavLink
          to="/"
          className={navItemClasses}
          onClick={onToggle}
        >
          Home
        </NavLink>

        <NavLink
          to="/works"
          className={navItemClasses}
          onClick={onToggle}
        >
          Works
        </NavLink>

        <NavLink
          to="/cv"
          className={navItemClasses}
          onClick={onToggle}
        >
          Curriculum Vitae
        </NavLink>
      </nav>
    </>
  );
}
