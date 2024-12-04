import { Box, Card, HStack, Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { ShowcaseCardName } from '@/components/showcase-card/showcase-card-name';
import { ShowcaseCardTag } from '@/components/showcase-card/showcase-card-tag';
import { GhostLink, RepoIconButton } from '@/components/user-interaction';

export const ShowcaseCard = ({
  category,
  description,
  headingTag,
  image,
  link,
  repo,
  tags,
  title,
  ...props
}) => {
  return (
    <Card.Root
      css={{ '--card-padding': 'spacing.5' }}
      bg="bg.card"
      boxShadow="accent"
      size="lg"
      variant="subtle"
      {...props}
    >
      <Card.Body>
        <Box>
          {image !== undefined && image !== null ? (
            <GhostLink
              float={{ md: 'left' }}
              display={{ base: 'table', md: 'unset' }}
              href={link}
              marginLeft={{ base: 'auto', md: 0 }}
              marginRight={{ base: 'auto', md: 4 }}
              target="_blank"
            >
              <Image
                height={120}
                marginBottom={{ base: 2, md: 0 }}
                src={image}
              />
            </GhostLink>
          ) : null}
          <Flex alignItems="center" gap={1}>
            <Text fontSize="sm" textTransform="uppercase">
              {category}
            </Text>

            {repo !== undefined && repo !== null ? (
              <RepoIconButton link={repo} marginLeft={-1.5} title={title} />
            ) : null}
          </Flex>
          <ShowcaseCardName
            link={link}
            marginBottom={2}
            name={title}
            tag={headingTag}
          />
          {typeof description === 'string' ? (
            <Text>{description}</Text>
          ) : (
            description.map((paragraph, idx) => (
              <Text key={idx}>{paragraph}</Text>
            ))
          )}
        </Box>
      </Card.Body>
      {Array.isArray(tags) && tags.length > 0 ? (
        <Card.Footer paddingTop={0}>
          <HStack wrap="wrap">
            {tags.map(tag => (
              <ShowcaseCardTag key={tag} tag={tag} />
            ))}
          </HStack>
        </Card.Footer>
      ) : null}
    </Card.Root>
  );
};

ShowcaseCard.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  headingTag: PropTypes.string,
  image: PropTypes.node,
  link: PropTypes.string,
  repo: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};
