import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        ghost: {
          _hover: {
            background: 'transparent',
            transitionDuration: '.2s',
            transform: 'scale(1.2)',
            transitionTimingFunction: 'ease-in-out',
          },
        },
      },
    },
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
});
