import CvSection from './CvSection';
import Skill from './Skill';

export default function CvSkills() {
  const skills = [
    { skill: 'JavaScript', strong: true },
    { skill: 'TypeScript', strong: true },
    { skill: 'React', strong: true },
    { skill: 'Vue.js', strong: false },
    { skill: 'Angular', strong: false },
    { skill: 'Ruby', strong: false },
    { skill: 'CSS', strong: true },
    { skill: 'Sass', strong: false },
    { skill: 'Stylus', strong: false },
    { skill: 'Linux', strong: true },
    { skill: 'Docker', strong: false },
    { skill: 'Git', strong: true },
    { skill: 'TDD', strong: true },
    { skill: 'Jest', strong: true },
    { skill: 'MongoDB', strong: false },
    { skill: 'SQL', strong: false },
    { skill: 'Node.js', strong: true },
    { skill: 'Redux', strong: true },
    { skill: 'WebPack', strong: true },
    { skill: 'Vite', strong: false },
    { skill: 'PWA', strong: false },
    { skill: 'Java', strong: false },
    { skill: 'GraphQL', strong: false },
    { skill: 'TailwindCSS', strong: true },
  ];

  const shuffledSkills = skills
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const skillComponents = shuffledSkills.map(({ skill, strong }) => (
    <Skill
      key={skill}
      strong={strong}
    >
      {skill}
    </Skill>
  ));

  return (
    <CvSection title="Skills">
      <div className="space-y-2">
        { skillComponents }
      </div>
    </CvSection>
  );
}
