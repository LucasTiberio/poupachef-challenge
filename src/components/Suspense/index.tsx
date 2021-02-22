import React from 'react';
import Spinner from 'react-svg-spinner';
import { Flex } from 'rebass';

interface SpinnerI {
  size?: string;
  color?: string;
}
const SuspenseComponent = ({ color, size }: SpinnerI): JSX.Element => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="#FFF">
      <Spinner color={color || 'black'} size={size || '20px'} speed="fast" />
    </Flex>
  );
};

export default SuspenseComponent;
