'use client';

import { chakra, defineRecipe, Link } from '@chakra-ui/react';

const linkRecipe = defineRecipe({
  base: { _focus: { outline: 'none' } },
});

export const GhostLink = chakra(Link, linkRecipe);

GhostLink.propTypes = Link.propTypes;
