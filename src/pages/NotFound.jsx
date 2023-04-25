import { Code, Link, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { RotatingLogo } from '../components/RotatingLogo';

export const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found | aserpi';
  }, []);

  return (
    <VStack spacing={12} textAlign="center">
      <RotatingLogo h="40vmin" pointerEvents="none" />
      <Code fontSize="3xl">
        Page not found.
        <br />
        Return{' '}
        <Link as={ReactRouterLink} textDecoration="underline" to="/">
          Home
        </Link>
        .
      </Code>
    </VStack>
  );
};
