import { Helmet } from 'react-helmet-async';

import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <article className="py-6 px-4 ">
      <Helmet>
        <title>
          Home - Jiří Chára
        </title>
      </Helmet>

      <Hero />

      <div className="space-y-4 divide-y divide-sky-400 divide-y-2">
        <Introduction />

        <Socials />
      </div>
    </article>
  );
}
