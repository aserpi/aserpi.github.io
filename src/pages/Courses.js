import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ProjectCard } from '../components/ProjectCard';

export const Courses = () => {
  const courses = [
    {
      desc: [
        'This course is an engaging self-paced video training solution that provides learners with more than 23 hours of personal training from security expert Sari Greene.',
        'Through the use of topic-focused instructional videos, learners gain an in-depth understanding of each objective in the CompTIA Security+ (SY0-601) exam, as well as a deeper understanding of security foundations and principles to ensure exam success.',
      ],
      link: 'https://learning.oreilly.com/videos/comptia-security-sy0-601/9780137280971/',
      prerelease: 'wip',
      name: 'Security+',
      organization: 'CompTIA',
    },
    {
      desc: [
        "The Microsoft cybersecurity architect has subject matter expertise in designing and evolving the cybersecurity strategy to protect an organization's mission and business processes across all aspects of the enterprise architecture.",
        'The cybersecurity architect designs a Zero Trust strategy and architecture, including security strategies for data, applications, access management, identity, and infrastructure. The cybersecurity architect also evaluates Governance Risk Compliance (GRC) technical strategies and security operations strategies.',
      ],
      link: 'https://learn.microsoft.com/en-us/certifications/cybersecurity-architect-expert/',
      name: 'Cybersecurity Architect (SC-100)',
      organization: 'Microsoft',
      prerelease: 'wip',
    },
    {
      desc: [
        'This 13.5 hour course prepares architects and systems administrators to install and configure Splunk Enterprise Security (ES).',
        'It covers ES event processing and normalization, deployment requirements, technology add-ons, dashboard dependencies, data models, managing risk, and customizing threat intelligence.',
      ],
      link: 'https://education.splunk.com/instructor-led-training/administering-splunk-enterprise-security-70',
      name: 'Administering Splunk Enterprise Security 7.0',
      organization: 'Splunk',
    },
    {
      desc: [
        'This advanced course prepares IT and security practitioners to plan, design, create and debug basic applications for SOAR.',
        'Students will learn fundamentals of SOAR application capabilities, creation and testing.',
      ],
      link: 'https://education.splunk.com/elearning/developing-soar-applications',
      name: 'Developing SOAR Applications',
      organization: 'Splunk',
      prerelease: 'wip',
    },
    {
      desc: [
        'This 9 hour introductory course prepares IT and security practitioners to plan, design, create and debug basic playbooks for SOAR.',
        'Students will learn fundamentals of SOAR playbook capabilities, creation and testing.',
      ],
      link: 'https://education.splunk.com/instructor-led-training/developing-soar-playbooks',
      name: 'Developing SOAR Playbooks',
      organization: 'Splunk',
    },
    {
      desc: 'This 3 hour course prepares IT professionals to configure and manage SOAR.',
      link: 'https://education.splunk.com/instructor-led-training/administering-splunk-soar',
      name: 'Administering Splunk SOAR',
      organization: 'Splunk',
    },
    {
      desc: [
        'This Accreditation path introduces the Splunk platform, portfolio, differentiators and how best to identify opportunities and position Splunk solutions for customers.',
        "The path provides a good baseline of Splunk's solutions in the Platform, Security and Observability product areas.",
      ],
      organization: 'Splunk',
      name: 'Sales Engineer I',
    },
  ];

  useEffect(() => {
    document.title = 'Courses | aserpi';
  }, []);

  return (
    <Flex
      alignSelf="center"
      flexWrap="wrap"
      gap={6}
      justifyContent="center"
      marginX={38}
      maxWidth={1280}
    >
      {courses.map(course => (
        <ProjectCard
          category={course.organization}
          description={course.desc}
          headingTag={course.prerelease}
          key={course.name}
          link={course.link}
          maxWidth={400}
          title={course.name}
        />
      ))}
    </Flex>
  );
};
