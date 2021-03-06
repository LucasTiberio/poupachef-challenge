import React from 'react';
import Spinner from 'react-svg-spinner';
import { Flex } from 'rebass';

interface SpinnerI {
  size?: string;
  color?: string;
}
const SpinnerComponent = ({ color, size }: SpinnerI): JSX.Element => {
  return (
    <Flex height="100%" alignItems="center" justifyContent="center">
      <Spinner color={color || 'black'} size={size || '20px'} speed="fast" />
    </Flex>
  );
};

export default SpinnerComponent;
