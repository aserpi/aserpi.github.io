import { useColorMode } from '@chakra-ui/react';

export const SplunkIcon = props => {
  const { colorMode } = useColorMode();
  const fill = colorMode === 'light' ? '#000' : '#FFF';

  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      viewBox="0 0 14.61 17.62"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          fill={fill}
          points="14.61 10.33 14.61 7.34 0 0 0 3.29 11.33 8.81 0 14.41 0 17.62 14.61 10.33"
        />
      </g>
    </svg>
  );
};
