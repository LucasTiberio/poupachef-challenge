import React from 'react';

import CompactLogo from '@poupachef/assets/images/compact_logo.png';
import Logo from '@poupachef/assets/images/logo.png';

import ThemeSwitcher from '../ThemeSwitcher';
import { Container, IconImage, LogoImage } from './style';

const Header = (): JSX.Element => {
  return (
    <Container>
      <div>
        <IconImage src={CompactLogo} />
        <LogoImage src={Logo} />
      </div>
      <ThemeSwitcher />
    </Container>
  );
};

export default Header;
