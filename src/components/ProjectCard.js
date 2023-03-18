import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Link,
  Text,
  Wrap,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { ProjectCardTag } from './ProjectCardTag';
import { ProjectCardName } from './ProjectCardName';
import { RepoIconButton } from './RepoIconButton';

export const ProjectCard = ({
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
    <Card variant="filled" {...props}>
      <CardBody>
        <Box>
          {image !== undefined && image !== null ? (
            <Link
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
            </Link>
          ) : null}
          <Flex alignItems="center" gap={1}>
            <Text casing="uppercase" fontSize="sm">
              {category}
            </Text>

            {repo !== undefined && repo !== null ? (
              <RepoIconButton link={repo} marginLeft={-1.5} title={title} />
            ) : null}
          </Flex>
          <ProjectCardName
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
      </CardBody>
      {Array.isArray(tags) && tags.length > 0 ? (
        <CardFooter paddingTop={0}>
          <Wrap>
            {tags.map(tag => (
              <ProjectCardTag key={tag} tag={tag} />
            ))}
          </Wrap>
        </CardFooter>
      ) : null}
    </Card>
  );
};

ProjectCard.propTypes = {
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
