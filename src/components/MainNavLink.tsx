import { ReactNode } from 'react';
import { NavLink, To } from 'react-router-dom';

interface MainNavLinkProps {
  to: To;
  children: ReactNode;
}

export default function MainNavLink({ to, children }: MainNavLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const defaultClasses = 'hover:underline decoration-sky-400 first-letter:decoration-sky-400';

        return isActive
          ? `${defaultClasses} first-letter:underline`
          : defaultClasses;
      }}
    >
      { children }
    </NavLink>
  );
}
