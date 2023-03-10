import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Footer } from './components/Footer';
import { Logo } from './Logo';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              <Code fontSize="xl">Work in Progress</Code>
            </Text>
          </VStack>

          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
