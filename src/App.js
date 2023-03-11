import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { theme } from './theme';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction={'column'} minHeight="100vh">
        <RouterProvider router={router} />
        <Spacer />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
