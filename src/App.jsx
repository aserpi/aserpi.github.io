import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { theme } from './theme';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Certifications } from './pages/Certifications';
import { Courses } from './pages/Courses';
import { Experience } from './pages/Experience';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Projects } from './pages/Projects';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Flex direction={'column'} minHeight="100vh">
        <Box height={20} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Certifications />} path="certifications" />
          <Route element={<Courses />} path="courses" />
          <Route element={<Experience />} path="experience" />
          <Route element={<Projects />} path="projects" />
          <Route element={<NotFound />} path="*" />
        </Routes>
        <Spacer />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
