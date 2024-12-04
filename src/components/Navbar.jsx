import {
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../images/logo.svg';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ColoredSeparator } from './ColoredSeparator';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from './ui/drawer';

export const Navbar = () => {
  const routes = ['experience', 'certifications', 'courses', 'projects'];

  const btnRef = useRef();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 22);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolled]);

  return (
    <DrawerRoot
      finalFocusRef={btnRef}
      onOpenChange={e => setOpen(e.open)}
      open={open}
      placement="end"
    >
      <DrawerBackdrop bg="bg.drawerBackdrop" />
      <Flex
        as="nav"
        bg="bg"
        direction={'column'}
        padding={2}
        paddingBottom={0}
        position="fixed"
        width="100%"
        zIndex={9999}
      >
        <Flex
          alignItems="center"
          gap={{ base: 0, md: 6 }}
          paddingLeft={2}
          paddingRight={{ base: 0, md: 2 }}
        >
          <Link to="/">
            <Image
              height={8}
              margin={{ base: 1, md: 0 }}
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
              /* TODO: only for light system */
              color="accent"
              css={{ '&.active': { display: 'inherit' } }}
              key={route}
              display={{
                base: open ? 'none !important' : 'none',
                md: 'none !important',
              }}
              marginBottom={1}
              marginLeft={4}
              size="3xl"
              textTransform="capitalize"
              to={`/${route}`}
            >
              {route}
            </Heading>
          ))}
          {routes.map(route => (
            <Heading
              as={NavLink}
              css={{
                '&.active': {
                  color: 'accent',
                },
                '&:not(.active):hover': {
                  transform: 'scale(1.15)',
                },
              }}
              key={route}
              display={{ base: 'none', md: 'inherit' }}
              size="md"
              to={`/${route}`}
              transitionDuration=".2s"
            >
              <Text fontSize="xl" textTransform="capitalize">
                {route}
              </Text>
            </Heading>
          ))}
          <Spacer />
          <ColorModeSwitcher
            justifySelf="flex-end"
            paddingTop={{ base: 2, md: 0 }}
          />
          <DrawerTrigger asChild>
            <IconButton
              aria-label={`${open ? 'Close' : 'Open'} navigation drawer`}
              display={{ base: 'inherit', md: 'none' }}
              fontSize="lg"
              onClick={e => setOpen(e.open)}
              paddingTop={{ base: 2, md: 0 }}
              ref={btnRef}
              size="md"
              variant="ghostLight"
            >
              {open ? <FaTimes /> : <FaBars />}
            </IconButton>
          </DrawerTrigger>
        </Flex>
        <ColoredSeparator
          display={open || scrolled ? 'inherit' : 'none'}
          marginTop={2}
        />
      </Flex>
      <DrawerContent bg="bg">
        <DrawerBody marginTop={20}>
          <Flex direction="column" gap={4} justifyContent="left">
            {routes.map(route => (
              <DrawerActionTrigger key={route} asChild>
                <Heading
                  as={NavLink}
                  css={{ '&.active': { color: 'accent' } }}
                  fontSize="3xl"
                  key={route}
                  onClick={e => setOpen(e.open)}
                  textTransform="uppercase"
                  to={`/${route}`}
                >
                  {route}
                </Heading>
              </DrawerActionTrigger>
            ))}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  );
};
