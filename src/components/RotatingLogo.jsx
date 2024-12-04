import { Image } from '@chakra-ui/react';
import logo from '../images/logo.svg';

export const RotatingLogo = props => {
  return (
    <Image
      _motionSafe={{ animation: 'spin', animationDuration: '20s' }}
      src={logo}
      {...props}
    />
  );
};
