import PropTypes from 'prop-types';
import {
  FaAws,
  FaCloudflare,
  FaDocker,
  FaGitlab,
  FaJsSquare,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { SiGithubactions } from 'react-icons/si';

import { SplunkIcon } from '@/components/icons';
import { Tag } from '@/components/layout';
import { useColorModeValue } from '@/components/user-interaction';

export const ShowcaseCardTag = ({ tag, ...props }) => {
  const tagFormats = {
    aws: {
      icon: FaAws,
      name: 'AWS',
    },
    cloudflarePages: {
      icon: FaCloudflare,
      name: 'Cloudflare Pages',
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

ShowcaseCardTag.propTypes = { tag: PropTypes.string.isRequired };
