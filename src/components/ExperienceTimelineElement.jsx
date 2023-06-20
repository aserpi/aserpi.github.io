import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Heading, Link, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ExperienceTimelineElement = ({
  company,
  companyUrl,
  desc,
  date,
  icon,
  iconStyle,
  title,
  ...props
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--chakra-colors-chakra-subtle-bg)',
        boxShadow: '0 3px 0 var(--chakra-colors-accent)',
      }}
      contentArrowStyle={{
        borderRightColor: 'var(--chakra-colors-chakra-subtle-bg)',
      }}
      date={date}
      icon={icon}
      iconOnClick={() => {
        if (companyUrl !== undefined && companyUrl !== null)
          window.open(companyUrl, '_blank');
      }}
      iconStyle={{
        ...{
          boxShadow: 'none',
          cursor:
            companyUrl !== undefined && companyUrl !== null
              ? 'pointer'
              : 'default',
        },
        ...iconStyle,
      }}
      {...props}
    >
      <Text
        as={Link}
        casing="uppercase"
        fontSize="sm"
        href={companyUrl}
        target="_blank"
      >
        {company}
      </Text>
      <Heading color="accent !important" marginTop={2} size="md">
        {title}
      </Heading>
      {desc.map((paragraph, idx) => (
        <Text key={idx}>{paragraph}</Text>
      ))}
    </VerticalTimelineElement>
  );
};

ExperienceTimelineElement.propTypes = {
  company: PropTypes.string.isRequired,
  companyUrl: PropTypes.string,
  date: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.node.isRequired,
  iconStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};
