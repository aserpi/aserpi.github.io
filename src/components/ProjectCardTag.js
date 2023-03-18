import {
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {
  FaAws,
  FaDocker,
  FaGitlab,
  FaJsSquare,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';

import { SplunkIcon } from './icons/SplunkIcon';

export const ProjectCardTag = ({ tag, ...props }) => {
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

  const variant = useColorModeValue('outline', 'subtle');

  const formattedTag = tagFormats[tag];
  return (
    <Tag key={tag} variant={variant} {...props}>
      <TagLeftIcon as={formattedTag.icon} />
      <TagLabel>{formattedTag.name}</TagLabel>
    </Tag>
  );
};

ProjectCardTag.propTypes = { tag: PropTypes.string.isRequired };
