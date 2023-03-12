import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const ExperienceTimelineElement = ({
  company,
  companyUrl,
  desc,
  date,
  icon,
  title,
  ...props
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'var(--chakra-colors-chakra-subtle-bg)',
        boxShadow: 'none',
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
        boxShadow:
          '0 0 0 4px var(--chakra-colors-accent),inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)',
      }}
      {...props}
    >
      <Text
        as="a"
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
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
