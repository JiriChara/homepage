import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Socials from '../components/Socials';

export default function Home() {
  return (
    <article className="py-6 px-4">
      <Hero />

      <Introduction />

      <section className="container mx-auto my-6">
        <hr />
      </section>

      <Socials />
    </article>
  );
}
