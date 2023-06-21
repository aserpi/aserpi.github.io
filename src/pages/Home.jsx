import { Box, Flex, Grid, Heading, Image, Spacer } from '@chakra-ui/react';
import { Fragment, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import logo from '../images/logo.svg';

export const Home = () => {
  const typewriterPause = 2000;

  useEffect(() => {
    document.title = 'Home | aserpi';
  }, []);

  return (
    <Fragment>
      <Spacer />
      <Grid
        templateColumns={{ base: 'auto', md: '1fr auto 1fr' }}
        templateRows={{ base: 'auto auto auto', md: 'auto' }}
      >
        <Flex
          gridRow={{ base: 3, md: 1 }}
          justifyContent={{ base: 'center', md: 'end' }}
        >
          <Image height={256} src={logo} />
        </Flex>
        <Box height={8} gridRow={{ base: 2, md: 1 }} width={8} />
        <Flex
          direction="column"
          gridRow={1}
          justifyContent="center"
          textAlign={{ base: 'center', md: 'inherit' }}
        >
          <Heading size="lg">Welcome! I&apos;m</Heading>
          <Heading size="2xl">Alessandro Serpi,</Heading>
          <Heading marginTop={1} size="lg">
            <Typewriter
              onInit={typewriter => {
                typewriter.rewrite = (str, deleteChars) => {
                  deleteChars = !Number.isInteger(deleteChars)
                    ? str.length
                    : deleteChars >= 0
                    ? deleteChars
                    : str.length + deleteChars;

                  return typewriter
                    .typeString(str)
                    .pauseFor(typewriterPause)
                    .deleteChars(deleteChars)
                    .pauseFor(typewriterPause / 3);
                };

                typewriter
                  .rewrite('a cyber security specialist.', -2)
                  .rewrite('Microsoft Security Operations Analyst.')
                  .rewrite('Splunk Enterprise Admin.')
                  .rewrite('Cybereason Threat Hunter.')
                  .rewrite('Cribl Admin.')
                  .rewrite('curious mind.', 14)
                  .typeString('lways learning, always experimenting.')
                  .pauseFor(typewriterPause * 2)
                  .start();
              }}
              options={{ delay: 75, deleteSpeed: 10, loop: true }}
            />
          </Heading>
        </Flex>
        <Spacer />
      </Grid>
    </Fragment>
  );
};
