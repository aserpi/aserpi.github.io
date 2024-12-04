'use client';

import { chakra, defineRecipe, Separator } from '@chakra-ui/react';

const separatorRecipe = defineRecipe({
  base: {
    borderColor: {
      _dark: 'whiteAlpha.300',
      _light: 'gray.200',
    },
    opacity: 0.6,
  },
});

export const ColoredSeparator = chakra(Separator, separatorRecipe);
