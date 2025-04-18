import { Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { ShowcaseCard } from '@/components/showcase-card';
import ccoe_admin from '@/images/ccoe-admin.webp';
import ccoe_user from '@/images/ccoe-user.webp';
import ccta from '@/images/ccta.webp';
import ccth from '@/images/ccth.webp';
import sc_200 from '@/images/sc-200.webp';
import sc_900 from '@/images/sc-900.webp';
import splk_acc_dev from '@/images/splk-acc-dev.webp';
import splk_1001 from '@/images/splk-1001.webp';
import splk_1002 from '@/images/splk-1002.webp';
import splk_1003 from '@/images/splk-1003.webp';
import splk_5001 from '@/images/splk-5001.webp';
import splk_5002 from '@/images/splk-5002.webp';

export const Certifications = () => {
  const certifications = [
    {
      expires: '2027-09-07',
      firstEarned: '2024-09-07',
      image: splk_5002,
      link: 'https://www.credly.com/badges/e331be9b-9dad-42a4-ac7c-f96c41206513/public_url',
      name: 'Splunk Certified Cybersecurity Defense Engineer',
      organization: 'Splunk',
    },
    {
      firstEarned: '2023-09-18',
      image: splk_5001,
      link: 'https://www.credly.com/badges/820450ba-6790-4803-abe1-5f2fe119a20b/public_url',
      name: 'Splunk Certified Cybersecurity Defense Analyst',
      organization: 'Splunk',
    },
    {
      expires: '2026-01-24',
      firstEarned: '2023-01-23',
      image: sc_200,
      link: 'https://learn.microsoft.com/api/credentials/share/it-it/aserpi/7D080407B702A5A4?sharingId=347A857BED5B7846',
      name: 'Microsoft Certified: Security Operations Analyst Associate (SC-200)',
      organization: 'Microsoft',
    },
    {
      firstEarned: '2023-01-03',
      image: sc_900,
      link: 'https://learn.microsoft.com/api/credentials/share/it-it/aserpi/B8076B92731E3AB5?sharingId=347A857BED5B7846',
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)',
      organization: 'Microsoft',
    },
    {
      expires: '2024-12-29',
      firstEarned: '2022-12-29',
      image: ccoe_admin,
      link: 'https://ccoecertificates.cribl.io/579e5eee-819b-462a-982d-26d96a932984',
      name: 'Cribl Certified Observability Engineer (CCOE) Admin',
      organization: 'Cribl',
    },
    {
      expires: '2025-12-28',
      firstEarned: '2022-12-28',
      image: splk_1003,
      link: 'https://www.credly.com/badges/a04de44b-3da3-4487-9981-e2794a19acb5/public_url',
      name: 'Splunk Enterprise Certified Administrator',
      organization: 'Splunk',
    },
    {
      expires: '2024-11-11',
      firstEarned: '2022-11-11',
      image: ccoe_user,
      link: 'https://ccoecertificates.cribl.io/f1f417af-94c2-4d0a-a3db-6727091ba4fd',
      name: 'Cribl Certified Observability Engineer (CCOE) User',
      organization: 'Cribl',
    },
    {
      expires: '2025-10-31',
      firstEarned: '2022-10-31',
      image: splk_acc_dev,
      link: 'https://www.credly.com/badges/e4b88b93-4e65-49cd-b16a-4b334c4f8d1f/public_url',
      name: 'Splunk Accredited Splunk Cloud and Enterprise Developer',
      organization: 'Splunk',
    },
    {
      expires: '2023-12-18',
      firstEarned: '2021-12-18',
      image: ccth,
      link: 'https://www.credly.com/badges/a34de2ba-b004-4240-8dad-ae6e83e94aab/public_url',
      name: 'Cybereason Threat Hunter',
      organization: 'Cybereason',
    },
    {
      expires: '2023-12-03',
      firstEarned: '2021-12-03',
      image: ccta,
      link: 'https://www.credly.com/badges/e1a2a6db-c849-46df-b360-213e12e34a29/public_url',
      name: 'Cybereason Certified Threat Analyst',
      organization: 'Cybereason',
    },
    {
      firstEarned: '2021-06-19',
      image: splk_1002,
      link: 'https://www.credly.com/badges/085f5aa9-8557-4501-a9ff-d7ee5d2322ae/public_url',
      name: 'Splunk Core Certified Power User',
      organization: 'Splunk',
    },
    {
      firstEarned: '2021-04-21',
      image: splk_1001,
      link: 'https://www.credly.com/badges/b46d0ea3-f70c-4f0c-9cb0-147823b45b7c/public_url',
      name: 'Splunk Core Certified User',
      organization: 'Splunk',
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
      {certifications.map(certification => {
        const desc = [`First earned on ${certification.firstEarned}.`];
        if (typeof certification.expires === 'string') {
          desc.push(
            ` Expire${
              certification.expires < new Date().toISOString().split('T')[0]
                ? 'd'
                : 's'
            } on ${certification.expires}.`
          );
        }

        return (
          <ShowcaseCard
            category={certification.organization}
            description={desc}
            image={certification.image}
            key={certification.name}
            link={certification.link}
            maxWidth={400}
            minWidth={{ md: 400 }}
            title={certification.name}
          />
        );
      })}
    </Flex>
  );
};
