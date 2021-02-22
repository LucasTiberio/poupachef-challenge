import React, { Suspense, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './theme/global';
import { ThemeI } from './theme/types';

import getThemeObject from './support/helpers/getThemeObject';
import SuspenseComponent from './components/Suspense';
import Routing from './routing';

import { withContext, AppContextProvider } from './context';

import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  // ContextAPI Values
  const [theme, setTheme] = useState<'LIGHT' | 'DARK'>('LIGHT');

  const providedTheme: ThemeI = useMemo(() => getThemeObject(theme), [theme]);

  const initialContextValues = {
    theme,
    setTheme,
  };

  return (
    <div className="App">
      <AppContextProvider value={initialContextValues}>
        <ThemeProvider theme={providedTheme}>
          <Suspense fallback={<SuspenseComponent />}>
            <GlobalStyle />
            <ToastContainer />
            <Routing />
          </Suspense>
        </ThemeProvider>
      </AppContextProvider>
    </div>
  );
};

export default withContext(App);
