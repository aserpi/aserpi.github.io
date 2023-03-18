import { cardAnatomy } from '@chakra-ui/anatomy';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        ghostLight: {
          transitionDuration: '.2s',
          _hover: {
            transform: 'scale(1.2)',
          },
        },
      },
    },
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: { accent: { default: 'blue.500', _dark: 'blue.400' } },
  },
});
