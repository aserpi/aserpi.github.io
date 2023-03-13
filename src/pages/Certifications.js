import {
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';

import ccoe_admin from '../images/ccoe_admin.png';
import ccoe_user from '../images/ccoe_user.png';
import ccta from '../images/ccta.png';
import ccth from '../images/ccth.png';
import sc_200 from '../images/sc-200.png';
import sc_900 from '../images/sc-900.png';
import splk_acc_dev from '../images/splk-acc-dev.png';
import splk_1001 from '../images/splk-1001.png';
import splk_1002 from '../images/splk-1002.png';
import splk_1003 from '../images/splk-1003.png';

export const Certifications = () => {
  const certifications = [
    {
      expires: '2024-01-23',
      firstEarned: '2023-01-23',
      image: sc_200,
      link: 'https://www.credly.com/badges/e69cd7f7-321a-45a8-b4b9-c07b941c3c6d/public_url',
      organization: 'Microsoft',
      title:
        'Microsoft Certified: Security Operations Analyst Associate (SC-200)',
    },
    {
      firstEarned: '2023-01-03',
      image: sc_900,
      link: 'https://www.credly.com/badges/62b5b33d-914d-4398-8616-679042451384/public_url',
      organization: 'Microsoft',
      title:
        'Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)',
    },
    {
      expires: '2024-12-29',
      firstEarned: '2022-12-29',
      image: ccoe_admin,
      link: 'https://ccoecertificates.cribl.io/579e5eee-819b-462a-982d-26d96a932984',
      organization: 'Cribl',
      title: 'Cribl Certified Observability Engineer (CCOE) Admin',
    },
    {
      expires: '2025-12-28',
      firstEarned: '2022-12-28',
      image: splk_1003,
      link: 'https://www.credly.com/badges/a04de44b-3da3-4487-9981-e2794a19acb5/public_url',
      organization: 'Splunk',
      title: 'Splunk Enterprise Certified Administrator',
    },
    {
      expires: '2024-11-11',
      firstEarned: '2022-11-11',
      image: ccoe_user,
      link: 'https://ccoecertificates.cribl.io/f1f417af-94c2-4d0a-a3db-6727091ba4fd',
      organization: 'Cribl',
      title: 'Cribl Certified Observability Engineer (CCOE) User',
    },
    {
      expires: '2025-10-31',
      firstEarned: '2022-10-31',
      image: splk_acc_dev,
      link: 'https://www.credly.com/badges/e4b88b93-4e65-49cd-b16a-4b334c4f8d1f/public_url',
      organization: 'Splunk',
      title: 'Splunk Accredited Splunk Cloud and Enterprise Developer',
    },
    {
      expires: '2023-12-18',
      firstEarned: '2021-12-18',
      image: ccth,
      link: 'https://www.credly.com/badges/a34de2ba-b004-4240-8dad-ae6e83e94aab/public_url',
      organization: 'Cybereason',
      title: 'Cybereason Threat Hunter',
    },
    {
      expires: '2023-12-03',
      firstEarned: '2021-12-03',
      image: ccta,
      link: 'https://www.credly.com/badges/e1a2a6db-c849-46df-b360-213e12e34a29/public_url',
      organization: 'Cybereason',
      title: 'Cybereason Certified Threat Analyst',
    },
    {
      firstEarned: '2021-06-19',
      image: splk_1002,
      link: 'https://www.credly.com/badges/085f5aa9-8557-4501-a9ff-d7ee5d2322ae/public_url',
      organization: 'Splunk',
      title: 'Splunk Core Certified Power User',
    },
    {
      firstEarned: '2021-04-21',
      image: splk_1001,
      link: 'https://www.credly.com/badges/b46d0ea3-f70c-4f0c-9cb0-147823b45b7c/public_url',
      organization: 'Splunk',
      title: 'Splunk Core Certified User',
    },
  ];

  useEffect(() => {
    document.title = 'Certifications | aserpi';
  }, []);

  return (
    <Flex
      alignSelf="center"
      flexWrap="wrap"
      gap={6}
      justifyContent="center"
      marginX={38}
      maxWidth={1280}
    >
      {certifications.map(certification => (
        <Card key={certification.title} maxWidth={400}>
          <CardBody>
            <Grid
              columnGap={4}
              templateAreas={{
                base: '"logo" "organization" "title" "earned" "expires"',
                md: '"logo organization" "logo title" "logo earned" "logo expires"',
              }}
              templateColumns={{ base: 'auto', md: 'auto 1fr' }}
              templateRows={{
                base: 'auto auto auto auto',
                md: 'min-content auto auto auto auto',
              }}
            >
              <GridItem area="logo" as={Flex} justifyContent="center">
                <Image
                  height={120}
                  marginBottom={2}
                  src={certification.image}
                />
              </GridItem>
              <GridItem area="organization">
                <Text casing="uppercase" fontSize="sm">
                  {certification.organization}
                </Text>
              </GridItem>
              <GridItem area="title">
                <Heading
                  as={Link}
                  color="accent"
                  href={certification.link}
                  size="md"
                  target="_blank"
                >
                  {certification.title}
                </Heading>
                <Spacer />
              </GridItem>
              <GridItem area="earned">
                <Text
                  marginTop={4}
                >{`First earned on ${certification.firstEarned}.`}</Text>
              </GridItem>
              <GridItem area="expires">
                {certification.expires !== undefined &&
                certification.expires !== null ? (
                  <Text>{`Expires on ${certification.expires}.`}</Text>
                ) : null}
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};
