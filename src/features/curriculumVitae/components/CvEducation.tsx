import CvSection from './CvSection';
import EducationSection from './EducationSection';

export default function CvEmploymentHistory() {
  return (
    <CvSection title="Education">
      <EducationSection
        schoolName="Brno University of Technology"
        fieldAndPeriod="Information Technology - Brno, Czech Republic - 2005 until 2006"
      />

      <EducationSection
        schoolName="Industrial High School"
        fieldAndPeriod="Mechanical Engineering CAD/CAM - Teplice, Czech Republic - 2001 until 2005"
      />

      <EducationSection
        schoolName="Basic School Marsovska"
        fieldAndPeriod="Teplice, Czech Republic - 1992 until 2001"
      />
    </CvSection>
  );
}
