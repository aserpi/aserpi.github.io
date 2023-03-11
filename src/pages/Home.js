import { Box, Code, Grid, Text, VStack } from '@chakra-ui/react';

import { Logo } from '../Logo';

export const Home = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
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
