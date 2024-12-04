import { IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { useColorMode, useColorModeValue } from './ui/color-mode.jsx';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label={`Switch to ${text} mode`}
      color="current"
      fontSize="lg"
      onClick={toggleColorMode}
      size="md"
      variant="ghostLight"
      {...props}
    >
      <SwitchIcon overflow="visible" />
    </IconButton>
  );
};
