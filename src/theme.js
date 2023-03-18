import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, extendTheme } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);
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
    Card: defineMultiStyleConfig({
      baseStyle: definePartsStyle({
        container: { boxShadow: '0 3px 0 var(--chakra-colors-accent)' },
      }),
    }),
    Heading: { baseStyle: { fontWeight: 'semibold' } },
  },
  config: {
    initialColorMode: 'system',
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: { accent: { default: 'blue.500', _dark: 'blue.400' } },
  },
});
