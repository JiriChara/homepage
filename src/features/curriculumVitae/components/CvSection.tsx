import type { ReactNode } from 'react';

import textToAnchorId from '../../../utils/textToAnchorId';

interface CvSectionProps {
  title: string;
  children: ReactNode;
}

export default function CvSection({
  title,
  children,
}: CvSectionProps) {
  const sectionId = textToAnchorId(title);

  return (
    <section className="container mx-auto flex flex-col md:flex-row md:space-x-4 divide-x-2 divide-sky-400">
      <div className="md:w-1/3 lg:w-1/5">
        <h3
          id={sectionId}
          className="text-xl text-red-500 font-bold sm:mb-2"
        >
          <a
            className="hover:brightness-125"
            href={`#${sectionId}`}
          >
            { title }
          </a>
        </h3>
      </div>

      <div className="md:w-2/3 lg:w-4/5 pl-4 space-y-5">
        { children }
      </div>
    </section>
  );
}
