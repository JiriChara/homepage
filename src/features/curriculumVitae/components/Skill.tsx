import type { ReactNode } from 'react';

interface SkillProps {
  children: ReactNode;
  strong?: boolean;
}

export default function Skill({
  children,
  strong,
}: SkillProps) {
  const paddingClasses = strong ? 'px-4 py-2' : 'px-2 py-1 text-xs';

  return (
    <span className={`${paddingClasses} mr-2 bg-red-500 rounded text-white inline-block`}>
      { children }
    </span>
  );
}

Skill.defaultProps = {
  strong: false,
};
