import { ChakraProvider } from '@chakra-ui/react';
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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
