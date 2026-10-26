import { InteractiveTimeline } from './interactive-timeline';

function TimeLineExperienceSection() {
  interface TimelineProps {
    experiences: {
      duration: string;
      position: string;
      company: string;
      companyLink?: string;
      skills: { name: string }[];
    }[];
  }
  interface Experience {
    duration: string;
    position: string;
    company: string;
    companyLink?: string;
    skills: { name: string }[];
  }

  const Experience: Experience[] = [
    {
      company: 'Self-Employed',
      position: 'Freelance Software Developer',
      duration: 'Aug 2025 - Present',
      skills: [{ name: 'NextJs' }, { name: 'C#' }, { name: 'TypeScript' }],
    },
    {
      company: 'Codebility',
      position: 'Full Stack Developer',
      duration: 'March 2025 - Aug 2025',
      skills: [
        { name: 'NextJs' },
        { name: 'Tailwind CSS' },
        { name: 'Supabase' },
        { name: 'PostgreSQL' },
      ],
    },
    {
      company: 'Technos Systems',
      position: 'Software Developer',
      duration: 'March 2023 - Jan 2025',
      skills: [
        { name: 'PHP CodeIgniter' },
        { name: 'Bootstrap' },
        { name: 'MySQL' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-fontGray">
        My work experience, spanning over 3 years, has been a journey of growth,
        learning, and innovation.
      </div>

      <div className="w-full overflow-x-hidden px-4 pb-20 md:h-[30rem] md:overflow-y-auto md:pb-0">
        <InteractiveTimeline experiences={Experience} />
      </div>
    </div>
  );
}

export default TimeLineExperienceSection;
