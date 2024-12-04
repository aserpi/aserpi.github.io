import { IconButton } from '@chakra-ui/react';
import { FaGitAlt, FaGithub, FaGitlab } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { GhostLink } from './ghost-link';

export const RepoIconButton = ({ link, title, ...props }) => (
  <IconButton
    aria-label={`Repository link for ${title}`}
    as={GhostLink}
    href={link}
    size="xs"
    target="_blank"
    variant="ghostLight"
    {...props}
  >
    {link.startsWith('https://github') ? (
      <FaGithub />
    ) : link.startsWith('https://gitlab') ? (
      <FaGitlab />
    ) : (
      <FaGitAlt />
    )}
  </IconButton>
);

RepoIconButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
