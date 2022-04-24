import { Link } from 'react-router-dom';
import MainNavLink from './MainNavLink';

export default function Header() {
  return (
    <header className="p-3 bg-red-500">
      <div className="container mx-auto text-white">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:first-letter:underline first-letter:decoration-sky-400">
            <h1 className="text-2xl">
              Jiří Chára
            </h1>
          </Link>

          <nav className="flex space-x-6">
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
        </div>
      </div>
    </header>
  );
}
