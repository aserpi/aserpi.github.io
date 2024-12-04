import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
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
import { useColorModeValue } from './ui/color-mode';
import { Tag } from './ui/tag';

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
      name: 'GitHub Actions',
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
    <Tag
      bg="bg.tag"
      boxShadow="tag"
      key={tag}
      size="lg"
      startElement={formattedTag.icon({ display: 'block' })}
      elementSize="sm"
      variant={variant}
      {...props}
    >
      {formattedTag.name}
    </Tag>
  );
};

ProjectCardTag.propTypes = { tag: PropTypes.string.isRequired };
