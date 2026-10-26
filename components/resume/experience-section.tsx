import React from 'react';
import { BorderBeam } from '../ui/border-beam';
import TimeLineExperienceSection from './time-line-experience-section';

type Experience = {
  duration: string;
  position: string;
  company?: string;
  companyLink?: string;
  skills: {
    name: string;
  }[];
};

function ExperienceSection() {
  const Experience: Experience[] = [
    {
      duration: 'Aug 2025 - Present',
      position: 'Freelance Software Developer',
      companyLink: 'https://www.fiverr.com/users/mdskumara',
      skills: [{ name: 'NextJs' }, { name: 'Angular' }, { name: 'TypeScript' }],
    },
    {
      duration: 'March 2025 - Aug 2025',
      position: 'Full Stack Developer',
      company: 'Codebility · Full-time',
      companyLink: 'https://www.codebility.tech/',
      skills: [
        { name: 'NextJs' },
        { name: 'Tailwind CSS' },
        { name: 'Supabase' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      duration: 'March 2023 - January 2025',
      position: 'Software Developer',
      company: 'Technos Systems · Full-time',
      companyLink: 'https://www.linkedin.com/company/technos-systems/',
      skills: [
        { name: 'PHP CodeIgniter' },
        { name: 'Bootstrap' },
        { name: 'MySQL' },
      ],
    },
  ];

  return (
    <div className="md:h-36">
      <TimeLineExperienceSection />
    </div>
  );
}

export default ExperienceSection;
