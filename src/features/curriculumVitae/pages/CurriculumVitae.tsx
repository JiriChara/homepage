import { Helmet } from 'react-helmet-async';

import CvIntro from '../components/CvIntro';
import CvEmploymentHistory from '../components/CvEmploymentHistory';
import CvEducation from '../components/CvEducation';
import CvSkills from '../components/CvSkills';
import CvLanguages from '../components/CvLanguages';

export default function CurriculumVitae() {
  return (
    <article className="py-6 px-4 space-y-6">
      <Helmet>
        <title>
          Curriculum Vitae - Jiří Chára
        </title>
      </Helmet>

      <CvIntro />

      <CvEmploymentHistory />

      <CvEducation />

      <CvSkills />

      <CvLanguages />
    </article>
  );
}
