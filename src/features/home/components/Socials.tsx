import {
  FaLinkedin,
  FaXingSquare,
  FaInstagram,
  FaGithub,
  FaLastfm,
  FaSpotify,
} from 'react-icons/fa';

export default function Socials() {
  return (
    <section className="container mx-auto">
      <p>
        Let&apos;s connect on
        { ' ' }
        <a
          href="https://www.linkedin.com/in/jirichara"
          className="underline text-[#0077b5] hover:brightness-125"
        >
          <span className="whitespace-nowrap">
            <FaLinkedin className="inline-block mr-0.5" />
            LinkedIn
          </span>
        </a>
        { ' ' }
        or
        { ' ' }
        <a
          href="https://www.xing.com/profile/Jiri_Chara"
          className="underline text-[#126567] hover:brightness-125"
        >
          <span className="whitespace-nowrap">
            <FaXingSquare className="inline-block mr-0.5" />
            Xing
          </span>
        </a>
        .
      </p>

      <p className="mt-2">
        Get a glimpse of my life story on
        { ' ' }
        <a
          href="https://www.instagram.com/ch4rass"
          className="underline text-[#c13584] hover:brightness-125"
        >
          <span className="whitespace-nowrap">
            <FaInstagram className="inline-block mr-0.5" />
            Instagram
          </span>
        </a>
        .
      </p>

      <p className="mt-2">
        Check my code on
        { ' ' }
        <a
          href="https://github.com/JiriChara"
          className="underline text-[#24292e] hover:brightness-200"
        >
          <span className="whitespace-nowrap">
            <FaGithub className="inline-block mr-0.5" />
            GitHub
          </span>
        </a>
        .
      </p>

      <p className="mt-2">
        Get inspired by my music taste on
        { ' ' }
        <a
          href="https://www.last.fm/user/Ch4rAss"
          className="underline text-[#d51007] hover:brightness-200"
        >
          <span className="whitespace-nowrap">
            <FaLastfm className="inline-block mr-0.5" />
            Last.fm
          </span>
        </a>
        { ' ' }
        or
        { ' ' }
        <a
          href="https://open.spotify.com/user/11147851210?si=BaujJV8wR3G9JGHWy0ZRfg"
          className="underline text-[#1db954] hover:brightness-200"
        >
          <span className="whitespace-nowrap">
            <FaSpotify className="inline-block mr-0.5" />
            Spotify
          </span>
        </a>
        .
      </p>
    </section>
  );
}
