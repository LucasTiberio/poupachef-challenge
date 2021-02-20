import React from 'react';

import ThemeSwitcher from '../ThemeSwitcher';
import { Container, IconImage, LogoImage } from './style';

const Header = (): JSX.Element => {
  return (
    <Container>
      <div>
        <IconImage src="https://play-lh.googleusercontent.com/sk4tzy1hVZVTzTNx7exV01HOae3Nuiuy8y6J7556l7cFWJZ6NiFvXOh1EQFxUW_vviI" />
        <LogoImage src="https://uploads-ssl.webflow.com/5e0517740aa529fa437bc1a2/5fbfa1730ef9e6ea14d23288_Group%203.svg" />
      </div>
      <ThemeSwitcher />
    </Container>
  );
};

export default Header;
