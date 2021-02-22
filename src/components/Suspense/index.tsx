import React from 'react';
import Spinner from 'react-svg-spinner';
import { Flex } from 'rebass';

const SuspenseComponent = (): JSX.Element => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" backgroundColor="#FFF">
      <Spinner color="black" size="34px" speed="fast" />
    </Flex>
  );
};

export default SuspenseComponent;
