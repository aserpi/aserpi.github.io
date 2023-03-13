import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ExperienceTimelineElement } from '../components/ExperienceTimelineElement';
import { SapienzaIcon } from '../components/icons/SapienzaIcon';
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
    {
      company: 'Sapienza University of Rome',
      companyUrl: 'https://corsidilaurea.uniroma1.it/en/corso/2019/30430/home',
      desc: [
        'Specialization in cyber security. Mark 110/110 with honours.',
        'Awarded a certificate in recognition of extracurricular research activities (Honours Programme).',
      ],
      date: '2021/01',
      icon: <SapienzaIcon overflow="visible" />,
      title: 'Master of Science in Engineering in Computer Science',
    },
    {
      company: 'Sapienza University of Rome',
      desc: [
        'Specialization in software architectures and security. Mark 102/110.',
        'Italian name: Laurea in Ingegneria Informatica e Automatica.',
      ],
      date: '2018/12',
      icon: <SapienzaIcon overflow="visible" />,
      title: 'Bachelor of Science in Computer and System Engineering',
    },
  ];

  return (
    <VerticalTimeline animate={false} lineColor="var(--chakra-colors-accent)">
      {experiences.map((experience, idx) => (
        <ExperienceTimelineElement key={idx} {...experience} />
      ))}
    </VerticalTimeline>
  );
};
