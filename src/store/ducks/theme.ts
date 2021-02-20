import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

type Themes = 'LIGHT' | 'DARK';

interface ThemeState {
  theme: Themes;
}

const initialState: ThemeState = {
  theme: 'LIGHT',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<Themes>) => {
      state.theme = action.payload;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getCurrentTheme = (state: RootState): Themes => state.theme.theme;

export default themeSlice.reducer;
