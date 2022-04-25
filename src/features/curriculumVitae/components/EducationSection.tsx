import textToAnchorId from '../../../utils/textToAnchorId';

interface EmployerSectionProps {
  fieldAndPeriod: string;
  schoolName: string;
}

export default function EducationSection({
  fieldAndPeriod,
  schoolName,
}: EmployerSectionProps) {
  const schoolId = textToAnchorId(schoolName);

  return (
    <section>
      <h4
        id={schoolId}
        className="text-lg font-bold"
      >
        <a
          className="hover:brightness-125"
          href={`#${schoolId}`}
        >
          { schoolName }
        </a>
      </h4>

      <em className="text-gray-500">
        <small>
          { fieldAndPeriod }
        </small>
      </em>
    </section>
  );
}
