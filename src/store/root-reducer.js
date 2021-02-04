import { combineReducers } from 'redux';
import { AuthSlice, LanguageSlice } from '@app/features';

export default combineReducers({
  Auth: AuthSlice.reducer,
  Language: LanguageSlice.reducer,
});
