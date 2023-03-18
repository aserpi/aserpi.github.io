import { IconButton, Link } from '@chakra-ui/react';
import { FaGitAlt, FaGithub, FaGitlab } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const RepoIconButton = ({ link, title, ...props }) => (
  <IconButton
    aria-label={`Repository link for ${title}`}
    as={Link}
    href={link}
    icon={
      link.startsWith('https://github') ? (
        <FaGithub />
      ) : link.startsWith('https://gitlab') ? (
        <FaGitlab />
      ) : (
        <FaGitAlt />
      )
    }
    target="_blank"
    variant="ghostLight"
    {...props}
  />
);

RepoIconButton.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
