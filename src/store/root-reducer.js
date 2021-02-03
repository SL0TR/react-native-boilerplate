import { combineReducers } from 'redux';
import { AuthSlice } from '@app/features';

export default combineReducers({
  Auth: AuthSlice.reducer,
});
