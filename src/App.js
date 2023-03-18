import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { theme } from './theme';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Flex direction={'column'} minHeight="100vh">
        <Box height={20} />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Spacer />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
