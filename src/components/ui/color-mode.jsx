'use client';

import { ClientOnly, IconButton, Skeleton } from '@chakra-ui/react';
import { ThemeProvider, useTheme } from 'next-themes';

import * as React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ColorModeProvider(props) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode();
  return colorMode === 'light' ? light : dark;
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === 'light' ? <FaMoon /> : <FaSun />;
}

export const ColorModeButton = React.forwardRef(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode();

    return (
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          aria-label="Toggle color mode"
          color="current"
          fontSize="lg"
          onClick={toggleColorMode}
          ref={ref}
          size="md"
          variant="ghostLight"
          {...props}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    );
  }
);
