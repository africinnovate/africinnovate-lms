import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IThemeState {
  themeState: boolean;
}

const initialState: IThemeState = {
  themeState: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeState: (state, action: PayloadAction<boolean>) => {
      state.themeState = action.payload;
    },
  },
});

export const { setThemeState } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;