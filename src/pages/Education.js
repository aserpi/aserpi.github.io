import { Flex } from '@chakra-ui/react';
import { ProjectCard } from '../components/ProjectCard';

export const Education = () => {
  return (
    <Flex flexWrap="wrap">
      <ProjectCard
        repo={'https://github.com/aserpi/aserpi.github.io'}
        name="This site!"
      />
    </Flex>
  );
};
