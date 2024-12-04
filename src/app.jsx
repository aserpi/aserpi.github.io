import { Box, ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import { ColorModeProvider } from '@/components/ui/color-mode';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Certifications } from '@/pages/certifications';
import { Courses } from '@/pages/courses';
import { Experience } from '@/pages/experience';
import { Home } from '@/pages/home';
import { NotFound } from '@/pages/not-found';
import { Projects } from '@/pages/projects';
import { system } from '@/system';

export const App = () => {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="system">
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
      </ColorModeProvider>
      <Navbar />
    </ChakraProvider>
  );
};
