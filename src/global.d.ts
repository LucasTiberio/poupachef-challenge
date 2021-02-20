/// <reference types="react-scripts" />

import 'styled-components';
import { ThemeI } from './theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeI {
    font?: 'Arial';
  }
}

declare module 'js-cookie';
