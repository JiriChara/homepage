import { Helmet } from 'react-helmet-async';

import notFoundImage from '../../../assets/404.png';

export default function NotFound() {
  return (
    <article className="container mx-auto py-10 px-4 flex flex-col items-center space-y-4">
      <Helmet>
        <title>
          404 - Jiří Chára
        </title>
      </Helmet>

      <img
        className="hover:rotate-[10deg] hover:invert duration-500"
        alt="Why You No!"
        src={notFoundImage}
      />

      <h2 className="text-xl">
        404
      </h2>
    </article>
  );
}
