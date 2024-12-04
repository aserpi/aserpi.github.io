import { Flex, Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { GhostLink } from './GhostLink.js';
import { useColorModeValue } from './ui/color-mode';
import { Tag } from './ui/tag';

export const ProjectCardName = ({ link, name, tag, ...props }) => {
  const tagVariant = useColorModeValue('outline', 'subtle');

  return (
    <Flex align="self-end" direction="row" gap={2} {...props}>
      {link !== undefined && link !== null ? (
        <Heading as={GhostLink} color="accent" href={link} target="_blank">
          {name}
        </Heading>
      ) : (
        <Heading color="accent">{name}</Heading>
      )}
      {tag ? (
        <Tag
          bg="gray.200/16"
          boxShadow={{ _light: 'inset 0 0 0px 1px var(--chakra-colors-fg)' }}
          textTransform="uppercase"
          variant={tagVariant}
        >
          {tag}
        </Tag>
      ) : null}
    </Flex>
  );
};

ProjectCardName.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
};
