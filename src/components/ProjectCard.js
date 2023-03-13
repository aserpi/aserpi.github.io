import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  IconButton,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaJsSquare,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';
import PropTypes from 'prop-types';

import { SplunkIcon } from './icons/SplunkIcon';
import { ProjectCardName } from './ProjectCardName';

const tagFormats = {
  aws: {
    icon: FaAws,
    name: 'AWS',
  },
  docker: {
    icon: FaDocker,
    name: 'Docker',
  },
  githubActions: {
    icon: SiGithubactions,
    name: 'GitHub actions',
  },
  gitlabCicd: {
    icon: FaGitlab,
    name: 'Gitlab CI/CD',
  },
  javascript: {
    icon: FaJsSquare,
    name: 'JavaScript',
  },
  python: {
    icon: FaPython,
    name: 'Python',
  },
  react: {
    icon: FaReact,
    name: 'React',
  },
  splunk: {
    icon: SplunkIcon,
    name: 'Splunk',
  },
};

export const ProjectCard = ({
  category,
  desc,
  link,
  name,
  prerelease,
  repo,
  tags,
  ...props
}) => {
  const tagVariant = useColorModeValue('outline', 'subtle');

  return (
    <Card variant="filled" {...props}>
      <CardBody>
        <Flex alignItems="center" gap={1}>
          <Text casing="uppercase" fontSize="sm">
            {category}
          </Text>

          {repo !== undefined && repo !== null ? (
            <IconButton
              aria-label={`GitHub link for ${name}`}
              as={Link}
              href={repo}
              icon={
                repo.startsWith('https://github') ? (
                  <FaGithub />
                ) : repo.startsWith('https://gitlab') ? (
                  <FaGitlab />
                ) : (
                  <FaGitAlt />
                )
              }
              marginLeft={-1.5}
              target="_blank"
              variant="ghostLight"
            />
          ) : null}
        </Flex>
        <ProjectCardName
          link={link}
          name={name}
          marginBottom={2}
          prerelease={prerelease}
        />
        <Text>{desc}</Text>
      </CardBody>
      <CardFooter paddingTop={0}>
        <Wrap>
          {tags.map(tag => {
            const { icon, name } = tagFormats[tag];
            return (
              <Tag key={tag} variant={tagVariant}>
                <TagLeftIcon as={icon} />
                <TagLabel>{name}</TagLabel>
              </Tag>
            );
          })}
        </Wrap>
      </CardFooter>
    </Card>
  );
};

ProjectCard.propTypes = {
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  repo: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  ...ProjectCardName.propTypes,
};
