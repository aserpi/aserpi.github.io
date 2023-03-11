import {
  Box,
  ButtonGroup,
  Divider,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import logo from '../logo.svg';
import { TextLogo } from '../textLogo';

export const Footer = () => {
  return (
    <Grid
      as="footer"
      columnGap={2}
      margin="auto"
      padding={{ base: 4, md: 8 }}
      templateColumns={{ base: 'auto', md: 'max-content 1fr max-content' }}
      templateRows={{ base: 'max-content auto auto', md: 'max-content auto' }}
      role="contentinfo"
      rowGap={2}
      width="100%"
    >
      <GridItem colSpan={{ base: 1, md: 3 }} display="flex" rowStart={1}>
        <Divider marginBottom={{ base: 2, md: 6 }} />
      </GridItem>
      <GridItem
        alignItems="center"
        display="flex"
        gap={2}
        justifyContent="center"
        rowStart={2}
      >
        <Image height={8} src={logo} width="auto" />
        <Box height={6} width="auto">
          <TextLogo height="100%" />
        </Box>
      </GridItem>
      <GridItem
        alignItems="center"
        display="flex"
        justifyContent="center"
        rowStart={{ base: 4, md: 2 }}
        textAlign="center"
      >
        <Text color="subtle" fontSize="sm" margin="auto">
          &copy; {new Date().getFullYear()} Alessandro Serpi. All rights
          reserved.
        </Text>
      </GridItem>

      <GridItem
        alignItems="center"
        display="flex"
        justifyContent="center"
        rowStart={{ base: 3, md: 2 }}
      >
        <ButtonGroup variant="ghost">
          <IconButton
            aria-label={'Email'}
            icon={<FaEnvelope fontSize="1.25rem" />}
            onClick={() => {
              const handle = 'aserpi';
              const tld = 'it';
              const scheme = 'otliam';
              window.location.href = `${scheme
                .split('')
                .reverse()
                .join('')}:${handle}@${handle}.${tld}`;
            }}
          />
          <IconButton
            aria-label="LinkedIn"
            as="a"
            href="https://linkedin.com/in/alessandro-serpi"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            aria-label="GitHub"
            as="a"
            href="https://github.com/aserpi"
            icon={<FaGithub fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </GridItem>
    </Grid>
  );
};
