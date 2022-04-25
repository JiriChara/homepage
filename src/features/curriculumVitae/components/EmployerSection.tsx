import type { ReactNode } from 'react';

interface EmployerSectionProps {
  children: ReactNode;
  period: string;
  employerName: string;
}

export default function EmployerSection({
  children,
  period,
  employerName,
}: EmployerSectionProps) {
  const employerId = employerName
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();

  return (
    <section>
      <h4
        id={employerId}
        className="text-lg font-bold"
      >
        <a
          className="hover:brightness-125"
          href={`#${employerId}`}
        >
          { employerName }
        </a>
      </h4>

      <em className="text-gray-500">
        <small>
          { period }
        </small>
      </em>

      { children }
    </section>
  );
}
