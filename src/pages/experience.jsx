import { useEffect } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {
  LoroPianaIcon,
  MoviriIcon,
  SapienzaIcon,
  SatispayIcon,
} from '@/components/icons';
import { ExperienceTimelineElement } from '@/components/timeline';
import { useColorModeValue } from '@/components/user-interaction';

export const Experience = () => {
  const iconBackground = useColorModeValue(
    'var(--chakra-colors-bg-card)',
    'white'
  );
  const sapienzaIcon = (
    <SapienzaIcon
      overflow="visible"
      transform={{ base: 'scale(2)', sm: 'scale(2.5)' }}
    />
  );
  const experiences = [
    {
      company: 'Satispay',
      company_name: 'https://www.satispay.com/',
      date: '2025/03 – present',
      desc: ['TBD'],
      icon: (
        <SatispayIcon transform={{ base: 'scale(0.85)', sm: 'scale(1.25)' }} />
      ),
      iconStyle: { background: iconBackground },
      title: 'Cyber Security Engineer',
    },
    {
      company: 'Loro Piana',
      companyUrl:
        'https://www.lvmh.com/houses/fashion-leather-goods/loro-piana/',
      date: '2023/07 – 2025/03',
      desc: [
        'Improved SOC operations by rewriting the incident response playbook and creating dedicated investigation resources in the SIEM.',
        'Performed RCA for critical security incidents and helped assess their operational and legal impact.',
        'Led cloud and Active Directory hardening efforts, improving compliance with internal and industry standards.',
        'Started a bug bounty program that found critical vulnerabilities and oversaw their remediation.',
      ],
      icon: (
        <LoroPianaIcon overflow="visible" transform={{ sm: 'scale(1.5)' }} />
      ),
      iconStyle: { background: iconBackground },
      title: 'Cyber Security Specialist',
    },
    {
      company: 'Moviri',
      companyUrl: 'https://www.moviri.com/cybersecurity',
      date: '2021/04 – 2023/07',
      desc: [
        'Designed and administered fault-tolerant SIEM/SOAR solutions with custom integrations and data source monitoring, providing full visibility into on-premises and cloud environments.',
        'Contributed to the definition and automation of response policies to security incidents, increasing alert precision by 36% and halving investigation times.',
        'Cooperated with L3 analysts in root cause analysis and threat hunting campaigns.',
        'Built a fraud detection platform with cloud-native OSINT capabilities that increased fraudster discovery by 500% and saved over 7000 person-hours a year.',
      ],
      icon: <MoviriIcon overflow="visible" transform={{ sm: 'scale(1.3)' }} />,
      iconStyle: { background: iconBackground },
      title: 'Cyber Security Consultant',
    },
    {
      company: 'Sapienza University of Rome',
      companyUrl: 'https://corsidilaurea.uniroma1.it/en/corso/2019/30430/home',
      desc: [
        'Specialization in cyber security. Mark 110/110 with honours.',
        'Awarded a certificate in recognition of extracurricular research activities (Honours Programme).',
      ],
      date: '2021/01',
      icon: sapienzaIcon,
      title: 'Master of Science in Engineering in Computer Science',
    },
    {
      company: 'Sapienza University of Rome',
      companyUrl: 'https://www.uniroma1.it/',
      desc: [
        'Specialization in software architectures and security. Mark 102/110.',
        'Italian name: Laurea in Ingegneria Informatica e Automatica.',
      ],
      date: '2018/12',
      icon: sapienzaIcon,
      title: 'Bachelor of Science in Computer and System Engineering',
    },
  ];

  useEffect(() => {
    document.title = 'Experience | aserpi';
  }, []);

  return (
    <VerticalTimeline lineColor="var(--chakra-colors-accent)">
      {experiences.map((experience, idx) => (
        <ExperienceTimelineElement key={idx} {...experience} />
      ))}
    </VerticalTimeline>
  );
};
