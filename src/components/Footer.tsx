import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative py-10 px-4 bg-red-400">
      <div className="container mx-auto flex flex-col md:items-center">
        <p>
          { `Copyright ©${currentYear} Jiří Chára. All Rights Reserved.` }
        </p>

        <p className="mt-1 text-xs text-gray-600}">
          The source code of this website is available on
          { ' ' }
          <a
            className="underline hover:brightness-125 hover:decoration-sky-400"
            href="https://github.com/JiriChara/homepage"
          >
            GitHub
          </a>
          { ' ' }
          and is licensed under
          { ' ' }
          <a
            className="underline hover:brightness-125 hover:decoration-sky-400"
            href="https://opensource.org/licenses/MIT"
          >
            MIT
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
