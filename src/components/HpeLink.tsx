import { Hpe } from 'grommet-icons';

export default function HpeLink() {
  return (
    <a
      className="underline text-[#01A982] hover:brightness-125"
      href="https://www.hpe.com"
    >
      <Hpe color="#01A982" className="inline-block mr-0.5 hover:rotate-[30deg] duration-500" />
      Hewlett Packard Enterprise
    </a>
  );
}
