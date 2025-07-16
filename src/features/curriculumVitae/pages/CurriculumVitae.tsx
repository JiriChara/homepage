import { Helmet } from 'react-helmet-async';

import CvSection from '../components/CvSection';
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

      <CvSection title="Driving">
        <p>
          Holder of European driving license, Category B
        </p>
      </CvSection>

      <CvSection title="Hobbies & Interests">
        <p>
          Music, traveling, hiking, cooking, drones, technology, programming, running, tea, spicy
          food, reading, gym and more.
        </p>
      </CvSection>

      <CvSection title="Professional Interests">
        <p>
          Web Development, Single-Page Applications, Vue.js, Progressive Web Applications, Front-End
          Architecture, Node.js, Mentoring, Front-End Performance, Test-Driven Development, Agile
          Ways of Working, Get Things Done!
        </p>
      </CvSection>
    </article>
  );
}
