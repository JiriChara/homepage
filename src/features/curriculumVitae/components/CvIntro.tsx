import meCv from '../../../assets/me-cv.jpg';

export default function CvIntro() {
  return (
    <section>
      <section className="container mx-auto flex flex-col md:flex-row border-b-2 border-sky-400 relative">
        <div>
          <h2 className="text-2xl mb-1 font-bold">
            Curriculum Vitae
          </h2>
        </div>

        <div>
          <img
            className="md:max-h-[300px] border-t-2 border-x-2 border-sky-400 md:border-2 xl:border-0 lg:max-h-[350px] lg:h-[350px] xl:max-h-[450px] xl:h-[450px] md:absolute xl:rotate-[-5deg] round xl:top-0 md:right-0 xl:right-4 shadow"
            src={meCv}
            alt="Jiří Chára"
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row">
        <dl>
          <dd><small>Cell: +49 163 8522883</small></dd>
          <dd>
            <small>
              Email:
              { ' ' }
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="mailto:jiri@chara.vip"
              >
                jiri@chara.vip
              </a>
            </small>
          </dd>
        </dl>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-2/3 mt-4">
          <em className="text-gray-500">
            <small>
              Web Development is my passion! My professional adventure with the web started in
              early 2011 and will continue for the foreseeable future. I love to learn new things
              and to improve myself as a person. My lifelong goal is to
              { ' ' }
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://twitter.com/hashtag/BeatYesterday"
              >
                <strong>#BeatYesterday</strong>
              </a>
              !
              These days I specialize in building high performing single-page and progressive web
              applications using JavaScript and TypeScript. I love contributing to open-source
              software and extending the ecosystem of JavaScript with helpful libraries and tools.
              I am always up-to-date with current trends and technologies, but I do not blindly
              follow the mainstream!
            </small>
          </em>
        </div>
      </section>
    </section>
  );
}
