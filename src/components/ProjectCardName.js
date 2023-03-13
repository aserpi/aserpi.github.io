import {
  Flex,
  Heading,
  Link,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ProjectCardName = ({ prerelease, link, name, ...props }) => {
  const tagVariant = useColorModeValue('outline', 'subtle');

  return (
    <Flex direction="row" gap={2} {...props}>
      {link !== undefined && link !== null ? (
        <Heading as={Link} color="accent" href={link} size="md" target="_blank">
          {name}
        </Heading>
      ) : (
        <Heading color="accent" size="md">
          {name}
        </Heading>
      )}
      {prerelease ? (
        <Tag variant={tagVariant}>
          <Text casing="uppercase">{prerelease}</Text>
        </Tag>
      ) : null}
    </Flex>
  );
};

ProjectCardName.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  prerelease: PropTypes.string,
};
