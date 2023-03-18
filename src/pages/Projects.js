import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ProjectCard } from '../components/ProjectCard';

export const Projects = () => {
  const projects = [
    {
      desc: 'Personal website made made with JavaScript, React, and Chakra UI.',
      category: 'website',
      name: 'Personal website',
      link: '/',
      prerelease: 'wip',
      repo: 'https://github.com/aserpi/aserpi.github.io',
      tags: ['githubActions', 'javascript', 'react'],
    },
    {
      desc: 'Alert action to upload Splunk search results to an Amazon S3 bucket. Developed using the UCC framework.',
      category: 'Splunk add-on',
      name: 'Amazon S3 Uploader for Splunk',
      repo: 'https://github.com/aserpi/TA_amazon_s3_uploader',
      tags: ['aws', 'githubActions', 'python', 'splunk'],
    },
    {
      desc: 'New and improved version of the app that adds JMESPath expressions to Splunk.',
      category: 'Splunk add-on',
      name: 'JMESPath for Splunk v2',
      prerelease: 'wip',
      repo: 'https://github.com/aserpi/jmespath/tree/develop',
      tags: ['python', 'splunk'],
    },
    {
      desc: 'Splunk geolocation lookups with Italian regions and provinces.',
      category: 'Splunk add-on',
      name: 'Italian Geolocation Lookups for Splunk',
      link: 'https://splunkbase.splunk.com/app/6642',
      repo: 'https://github.com/aserpi/SA-geo_it_lookups',
      tags: ['githubActions', 'splunk'],
    },
    {
      desc: 'Pygments lexer for the Splunk Search Processing Language (SPL). The project is in its early phases.',
      category: 'Open source contributions',
      name: 'SplLexer',
      prerelease: 'wip',
      repo: 'https://github.com/aserpi/spl-lexer/tree/develop',
      tags: ['python'],
    },
    {
      desc: 'Private documentation on cyber security topics, tools, standards, and regulations spanning over 20 000 words.',
      category: 'website',
      name: 'Cyber security docs',
      link: 'https://docs.aserpi.it',
      repo: 'https://gitlab.com/alessandro.serpi/docs',
      tags: ['docker', 'gitlabCicd'],
    },
  ];

  useEffect(() => {
    document.title = 'Projects | aserpi';
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
      {projects.map(project => (
        <ProjectCard
          category={project.category}
          description={project.desc}
          headingTag={project.prerelease}
          link={project.link}
          key={project.name}
          maxWidth={400}
          minWidth={150}
          repo={project.repo}
          tags={project.tags}
          title={project.name}
        />
      ))}
    </Flex>
  );
};
