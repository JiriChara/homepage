import CvSection from './CvSection';

export default function CvLanguages() {
  return (
    <CvSection title="Languages">
      <div className="space-y-2">
        <dl>
          <dd>
            <strong>Czech</strong>
            : Native proficiency
          </dd>

          <dd>
            <strong>English</strong>
            : Professional-working proficiency
          </dd>

          <dd>
            <strong>German</strong>
            : Professional-working proficiency
          </dd>
        </dl>
      </div>
    </CvSection>
  );
}
