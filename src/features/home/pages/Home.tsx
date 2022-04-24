import Hero from '../components/Hero';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <article className="py-6 px-4">
      <Hero />

      <Introduction />
    </article>
  );
}
