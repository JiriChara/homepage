import { Link } from 'react-router-dom';

import MainNavLink from './MainNavLink';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="p-3 bg-red-500 relative">
      <div className="container flex items-center justify-between mx-auto text-white">
        <Link to="/" className="hover:first-letter:underline first-letter:decoration-sky-400">
          <h1 className="text-2xl">
            Jiří Chára
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <MainNavLink to="/">
            Home
          </MainNavLink>

          <MainNavLink to="/works">
            Works
          </MainNavLink>

          <MainNavLink to="/cv">
            Curriculum Vitae
          </MainNavLink>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
