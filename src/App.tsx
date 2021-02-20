import React, { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { getCurrentTheme } from './store/ducks/theme';
import GlobalStyle from './theme/global';

import Routing from './routing';

import { ThemeI } from './theme/types';
import LightTheme from './theme/themes/light';
import DarkTheme from './theme/themes/dark';

const App = (): JSX.Element => {
  const currentTheme = useSelector(getCurrentTheme);

  const providedTheme: ThemeI = useMemo(() => {
    switch (currentTheme) {
      case 'LIGHT':
        return LightTheme;

      case 'DARK':
        return DarkTheme;

      default:
        return LightTheme;
    }
  }, [currentTheme]);

  return (
    <div className="App">
      <ThemeProvider theme={providedTheme}>
        <GlobalStyle />
        <ToastContainer />
        <Suspense fallback={<h1>loading</h1>}>
          <Routing />
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;
