import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';

import logo from '../images/logo.svg';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const routes = ['experience', 'certifications', 'courses', 'projects'];

  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 22);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  return (
    <Flex
      as="nav"
      background="chakra-body-bg"
      direction={'column'}
      padding={2}
      paddingBottom={0}
      position="fixed"
      width="100%"
      zIndex={9999}
    >
      <Flex alignItems="center" gap={{ base: 0, md: 6 }} paddingLeft={2}>
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
        {routes.map(route => (
          <Heading
            as={NavLink}
            color="accent"
            key={route}
            display={{
              base: isOpen ? 'none !important' : 'none',
              md: 'none !important',
            }}
            marginLeft={4}
            sx={{ '&.active': { display: 'inherit' } }}
            textTransform="capitalize"
            to={`/${route}`}
          >
            {route}
          </Heading>
        ))}

        {routes.map(route => (
          <Heading
            as={NavLink}
            key={route}
            display={{ base: 'none', md: 'inherit' }}
            size="md"
            sx={{
              '&.active': {
                color: 'accent',
              },
              '&:not(.active):hover': {
                transform: 'scale(1.15)',
              },
            }}
            to={`/${route}`}
            transitionDuration=".2s"
          >
            <Text casing="capitalize">{route}</Text>
          </Heading>
        ))}
        <Spacer />
        <ColorModeSwitcher justifySelf="flex-end" />
        <IconButton
          aria-label={`${isOpen ? 'Close' : 'Open'} navigation drawer`}
          display={{ base: 'inherit', md: 'none' }}
          fontSize="lg"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          onClick={isOpen ? onClose : onOpen}
          ref={btnRef}
          size="md"
          variant="ghostLight"
        />
        <Drawer
          finalFocusRef={btnRef}
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
        >
          <DrawerOverlay />
          <DrawerContent background="chakra-body-bg">
            <DrawerCloseButton />
            <DrawerBody marginTop={20}>
              <Flex direction="column" gap={4} justifyContent="left">
                {routes.map(route => (
                  <Heading
                    as={NavLink}
                    key={route}
                    onClick={onClose}
                    sx={{ '&.active': { color: 'accent' } }}
                    textTransform="uppercase"
                    to={`/${route}`}
                  >
                    {route}
                  </Heading>
                ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Divider
        display={isOpen || scrolled ? 'inherit' : 'none'}
        marginTop={2}
      />
    </Flex>
  );
};
