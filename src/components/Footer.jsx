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
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import logo from '../logo.svg';
import { TextLogo } from '../textLogo';

export const Footer = () => {
  return (
    <Grid
      as="footer"
      columnGap={2}
      justifySelf="center"
      maxWidth="1140px"
      templateColumns={{ base: 'auto', md: 'max-content 1fr max-content' }}
      templateRows={{ base: '24px auto auto', md: '24px auto' }}
      rowGap={{ base: 0, md: 2 }}
      role="contentinfo"
      width="100%"
    >
      <GridItem
        colSpan={{ base: 1, md: 3 }}
        direction="column-reverse"
        display="flex"
      >
        <Divider />
      </GridItem>
      <GridItem
        alignItems="center"
        display="flex"
        gap={2}
        justifyContent="center"
      >
        <Image height={8} src={logo} width="auto" />
        <Box height={6} width="auto">
          <TextLogo height="100%" />
        </Box>
      </GridItem>
      <GridItem alignItems="center" display="flex" justifyContent="center">
        <Text color="subtle" fontSize="sm" margin="auto">
          &copy; {new Date().getFullYear()} Alessandro Serpi. All rights
          reserved.
        </Text>
      </GridItem>

      <GridItem alignItems="center" display="flex" justifyContent="center">
        <ButtonGroup variant="ghost">
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
