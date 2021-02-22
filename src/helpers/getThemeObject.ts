import LightTheme from '@poupachef/theme/themes/light';
import DarkTheme from '@poupachef/theme/themes/dark';
import { ThemeI } from '@poupachef/theme/types';

export default (theme: 'LIGHT' | 'DARK'): ThemeI => {
  switch (theme) {
    case 'LIGHT':
      return LightTheme;

    case 'DARK':
      return DarkTheme;

    default:
      return LightTheme;
  }
};
