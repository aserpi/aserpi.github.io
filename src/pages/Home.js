import { Box, Code, Grid, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

export const Home = () => {
  useEffect(() => {
    document.title = 'Home | aserpi';
  }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            <Code fontSize="xl">Work in Progress</Code>
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};
