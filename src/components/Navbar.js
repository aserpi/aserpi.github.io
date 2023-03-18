import { Divider, Flex, Image, Spacer } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const Navbar = () => {
  return (
    <Flex direction={'column'} padding={2}>
      <Flex alignItems="center" gap={2}>
        <Link to="/">
          <Image
            height={8}
            src={logo}
            width="auto"
            _hover={{
              transitionDuration: '.2s',
              transform: 'scale(1.2)',
              transitionTimingFunction: 'ease-in-out',
            }}
          />
        </Link>
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Divider marginTop={2} />
    </Flex>
  );
};
