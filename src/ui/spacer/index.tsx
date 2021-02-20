import React from 'react';

interface Props {
  space: string | number;
}
const Spacer = ({ space }: Props): JSX.Element => <div style={{ marginTop: space }} />;

export default Spacer;
