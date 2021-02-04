import { createSlice } from '@reduxjs/toolkit';
import { languages } from '@app/config';

import _ from 'lodash';

const initState = {
  currentLanguage: {
    locale: 'en-US',
    name: 'English',
  },
};

const LanguageSlice = createSlice({
  name: 'Language',
  initialState: initState,
  reducers: {
    changeLanguage(state, { payload }) {
      const language = _.find(languages, {
        name: payload,
      });
      state.currentLanguage = language;
    },
  },
});

export const { changeLanguage } = LanguageSlice.actions;

export default LanguageSlice;
