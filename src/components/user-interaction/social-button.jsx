import { IconButton } from '@chakra-ui/react';

import { GhostLink } from '@/components/user-interaction';

export const SocialButton = props => {
  return (
    <IconButton
      as={GhostLink}
      variant="ghostLight"
      _hover={{
        transform: 'scale(1.2)',
        transition: 'transform .2s',
      }}
      {...props}
    />
  );
};
