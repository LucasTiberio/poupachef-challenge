import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentTheme, updateTheme } from '../../store/ducks/theme';

import { Container, SwitcherBall, LightText, DarkText } from './style';

const ThemeSwitcher = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(getCurrentTheme);

  const handleUpdateTheme = () => {
    const newTheme = currentTheme === 'LIGHT' ? 'DARK' : 'LIGHT';

    dispatch(updateTheme(newTheme));
  };

  return (
    <Container onClick={handleUpdateTheme}>
      <SwitcherBall active={currentTheme !== 'LIGHT'} />
      {currentTheme === 'LIGHT' && (
        <LightText>
          DAY
          <br />
          MODE
        </LightText>
      )}
      {currentTheme === 'DARK' && (
        <DarkText>
          NIGHT
          <br />
          MODE
        </DarkText>
      )}
    </Container>
  );
};

export default ThemeSwitcher;
