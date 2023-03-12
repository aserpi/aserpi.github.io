import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ExperienceTimelineElement } from '../components/ExperienceTimelineElement';
import '../styles/experienceTimelineElement.css';

export const Experience = () => {
  const experiences = [
    {
      company: 'Moviri',
      companyUrl: 'https://www.moviri.com/cybersecurity',
      date: '2021/04 – present',
      desc: [
        'Designed and administered fault-tolerant SIEM/SOAR solutions with custom integrations and data source monitoring, providing full visibility into on-premises and cloud environments.',
        'Contributed to the definition and automation of response policies to security incidents, increasing alert precision by 36% and halving investigation times.',
        'Cooperated with L3 analysts in root cause analysis and threat hunting campaigns.',
        'Built a fraud detection platform with cloud-native OSINT capabilities that increased fraudster discovery by 500% and saved over 7000 person-hours a year.',
      ],
      title: 'Cyber Security Analyst',
    },
  ];

  return (
    <VerticalTimeline lineColor="var(--chakra-colors-accent)">
      {experiences.map((experience, idx) => (
        <ExperienceTimelineElement key={idx} {...experience} />
      ))}
    </VerticalTimeline>
  );
};
