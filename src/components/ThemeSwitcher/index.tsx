import { withContext } from '@poupachef/context';
import React from 'react';

import { Container, SwitcherBall, LightText, DarkText } from './style';

interface Props {
  context: AppContextInterface;
}
const ThemeSwitcher = ({ context }: Props): JSX.Element => {
  const { theme } = context;

  const handleUpdateTheme = () => {
    const newTheme = theme === 'LIGHT' ? 'DARK' : 'LIGHT';

    context.setTheme(newTheme);
  };

  return (
    <Container onClick={handleUpdateTheme}>
      <SwitcherBall active={theme !== 'LIGHT'} />
      {theme === 'LIGHT' && (
        <LightText>
          DAY
          <br />
          MODE
        </LightText>
      )}
      {theme === 'DARK' && (
        <DarkText>
          NIGHT
          <br />
          MODE
        </DarkText>
      )}
    </Container>
  );
};

export default withContext(ThemeSwitcher);
