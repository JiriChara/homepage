import { Link } from 'react-router-dom';

import MainNavLink from './MainNavLink';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="py-3 px-4 bg-red-500 relative border-b-[3px] border-sky-400">
      <div className="container flex items-center justify-between mx-auto text-white">
        <Link to="/" className="hover:first-letter:underline hover:first-letter:decoration-sky-400">
          <h1 className="text-2xl drop-shadow-lg hover:rotate-[-4deg] duration-500">
            Jiří Chára
          </h1>
        </Link>

        <nav className="hidden md:flex space-x-6">
          <MainNavLink to="/">
            Home
          </MainNavLink>

          <MainNavLink to="/works">
            Projects
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
