import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { theme } from './theme';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Experience } from './pages/Experience';
import { Certifications } from './pages/Certifications';
import { Education } from './pages/Education';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction={'column'} minHeight="100vh">
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Certifications />} path="certifications" />
          <Route element={<Education />} path="education" />
          <Route element={<Experience />} path="experience" />
          <Route element={<Projects />} path="projects" />
        </Routes>
        <Spacer />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
