import { Code, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { RotatingLogo } from '@/components/logos';
import { GhostLink } from '@/components/user-interaction';

export const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found | aserpi';
  }, []);

  return (
    <VStack gap={12} textAlign="center">
      <RotatingLogo h="40vmin" pointerEvents="none" />
      <Code fontSize="3xl" lineHeight="unset" size="lg" variant="surface">
        <span>
          Page not found. <br />
          Return{' '}
          <GhostLink as={ReactRouterLink} textDecoration="underline" to="/">
            Home
          </GhostLink>
          .
        </span>
      </Code>
    </VStack>
  );
};
