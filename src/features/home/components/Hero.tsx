import me from '../../../assets/me.jpg';

export default function Hero() {
  const amp = <span className="text-red-500 inline-block hover:rotate-[30deg] duration-500">&amp;</span>;

  return (
    <section className="container mx-auto flex flex-col-reverse md:flex-row md:justify-between items-center">
      <div className="md:w-1/2">
        <h1 className="text-3xl text-black">
          <span className="whitespace-pre-line">
            Senior Software Engineer
            { ' ' }
            { amp }
            { '\n' }
            JavaScript Enthusiast
            { ' ' }
            { amp }
            { '\n' }
            Building Scalable,
            { '\n' }
            Performant, Responsive
            { '\n' }
            Well Tested Web Applications
          </span>
        </h1>
      </div>

      <div className="md:w-1/2 mb-6 md:mb-0 flex justify-end">
        <img
          className="h-full rounded shadow"
          alt="Jiří Chára on King Power Mahanakhon"
          src={me}
        />
      </div>
    </section>
  );
}
