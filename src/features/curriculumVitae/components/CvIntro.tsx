import meCv from '../../../assets/me-cv.jpg';

export default function CvIntro() {
  return (
    <section>
      <section className="container mx-auto flex flex-col md:flex-row border-b-2 border-sky-400 relative">
        <div>
          <h2 className="text-2xl mb-1 font-bold">Curriculum Vitae</h2>
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
          <dd>
            <small>Cell: +49 163 8522883</small>
          </dd>
          <dd>
            <small>
              Email:
              {' '}
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
              Web development is my passion! My professional journey with the web began in early
              2011 and continues to this day. I love learning new things and constantly improving
              myself — both professionally and personally. My lifelong goal is to
              {' '}
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://twitter.com/hashtag/BeatYesterday"
              >
                <strong>#BeatYesterday</strong>
              </a>
              .
              <br />
              These days, I specialize in building high-performing single-page and progressive web
              applications using JavaScript and TypeScript. I enjoy contributing to open-source
              software and extending the JavaScript ecosystem with useful libraries and tools.
              I stay up to date with the latest trends and technologies — but I don’t follow the
              mainstream blindly!
            </small>
          </em>
        </div>
      </section>
    </section>
  );
}
