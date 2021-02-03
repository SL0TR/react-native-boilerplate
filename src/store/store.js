import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Auth'],
};

const middleware = [
  ...(__DEV__ ? [logger] : []),
  ...getDefaultMiddleware({ serializableCheck: false }),
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: __DEV__,
});

const persistor = persistStore(store);
export { store, persistor };
