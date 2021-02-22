import React, { Suspense, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './theme/global';

import Routing from './routing';

import { ThemeI } from './theme/types';

import { withContext, AppContextProvider } from './context';

import 'react-toastify/dist/ReactToastify.css';
import getThemeObject from './helpers/getThemeObject';

const App = (): JSX.Element => {
  // ContextAPI Values
  const [theme, setTheme] = useState<'LIGHT' | 'DARK'>('DARK');

  const providedTheme: ThemeI = useMemo(() => getThemeObject(theme), [theme]);

  const initialContextValues = {
    theme,
    setTheme,
  };

  return (
    <div className="App">
      <AppContextProvider value={initialContextValues}>
        <ThemeProvider theme={providedTheme}>
          <GlobalStyle />
          <ToastContainer />
          <Suspense fallback={<></>}>
            <Routing />
          </Suspense>
        </ThemeProvider>
      </AppContextProvider>
    </div>
  );
};

export default withContext(App);
