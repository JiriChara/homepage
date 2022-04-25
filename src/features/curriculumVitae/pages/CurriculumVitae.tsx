import { Helmet } from 'react-helmet-async';

import CvIntro from '../components/CvIntro';

export default function CurriculumVitae() {
  return (
    <article className="py-6 px-4 space-y-6">
      <Helmet>
        <title>
          Curriculum Vitae - Jiří Chára
        </title>
      </Helmet>

      <CvIntro />
    </article>
  );
}
