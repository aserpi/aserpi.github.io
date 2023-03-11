import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export const ProjectCard = ({ name, repo, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader>
        <Heading size="md">{name}</Heading>
        <IconButton
          as="a"
          aria-label={`GitHub link for ${name}`}
          href={repo}
          icon={<FaGithub fontSize="1.25rem" />}
          target="_blank"
          variant="ghost"
        />
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: String,
  repo: String,
};
