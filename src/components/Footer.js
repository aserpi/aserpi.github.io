import {
  Box,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import logo from '../images/logo.svg';
import { TextLogo } from './TextLogo';

export const Footer = () => {
  return (
    <Grid
      as="footer"
      columnGap={2}
      paddingBottom={6}
      paddingTop={8}
      paddingX={2}
      templateColumns={{ base: 'auto', md: 'auto auto' }}
      templateRows={{ base: 'max-content auto auto', md: 'max-content auto' }}
      role="contentinfo"
      rowGap={{ base: 2, md: 6 }}
      width="100%"
    >
      <GridItem
        as={Flex}
        colSpan={{ base: 1, md: 2 }}
        marginBottom={{ base: 4, md: 0 }}
        rowStart={1}
      >
        <Divider />
      </GridItem>
      <GridItem
        alignItems="center"
        as={Flex}
        colStart={1}
        gap={2}
        justifyContent={{ base: 'center', md: 'left' }}
        marginLeft={{ base: 0, md: 2 }}
        rowStart={2}
      >
        <Image height={8} src={logo} width="auto" />
        <Box height={6} width="auto" zIndex="docked">
          <TextLogo height="100%" />
        </Box>
      </GridItem>
      <GridItem
        alignItems="center"
        as={Flex}
        colStart={{ base: 1, md: 2 }}
        justifyContent={{ base: 'center', md: 'right' }}
        rowStart={{ base: 3, md: 2 }}
      >
        <ButtonGroup marginRight={{ base: 0, md: 2 }} variant="ghostLight">
          <IconButton
            aria-label={'Email'}
            icon={<FaEnvelope fontSize="1.25rem" />}
            onClick={() => {
              const handle = 'aserpi';
              const scheme = 'otliam';
              const tld = 'it';
              window.location.href = `${scheme
                .split('')
                .reverse()
                .join('')}:${handle}@${handle}.${tld}`;
            }}
          />
          <IconButton
            aria-label="LinkedIn"
            as={Link}
            href="https://linkedin.com/in/alessandro-serpi"
            icon={<FaLinkedin fontSize="1.25rem" />}
            target="_blank"
          />
          <IconButton
            aria-label="GitHub"
            as={Link}
            href="https://github.com/aserpi"
            icon={<FaGithub fontSize="1.25rem" />}
            target="_blank"
          />
        </ButtonGroup>
      </GridItem>
      <GridItem
        alignItems="center"
        as={Flex}
        colEnd={{ base: 2, md: 3 }}
        colStart={1}
        justifyContent="center"
        rowStart={{ base: 4, md: 2 }}
        textAlign="center"
      >
        <Text color="subtle" fontSize="sm" margin="auto">
          &copy; {new Date().getFullYear()} Alessandro Serpi. All rights
          reserved.
        </Text>
      </GridItem>
    </Grid>
  );
};
