import { configureStore } from '@reduxjs/toolkit';
import { questionsReducer } from './questionsSlice';
import { userReducer } from './userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const userPersistConfig = {
  key: 'user',
  storage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    questions: questionsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     questions: questionsReducer,
//     user: userReducer,
//   },
// });