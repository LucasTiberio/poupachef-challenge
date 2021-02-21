import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { Create } from '@material-ui/icons';

import { Container, Key, Value, SaveRoundedButton } from './style';

interface Props {
  title: string;
  onClickEdit(): void;
  values: {
    label: string;
    key: string;
    value: string;
  }[];
}
const InformationBox = ({ title, values, onClickEdit }: Props): JSX.Element => {
  return (
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="24px" fontWeight="bold">
          {title}
        </Text>
        <SaveRoundedButton onClick={onClickEdit}>
          <Create />
        </SaveRoundedButton>
      </Flex>

      <Box mt="32px">
        {values.map((information, i) => (
          <Flex alignItems="center" pb="8px" key={i}>
            <Key>{information.label}</Key>
            <Value>{information.value}</Value>
          </Flex>
        ))}
      </Box>
    </Container>
  );
};

export default InformationBox;
