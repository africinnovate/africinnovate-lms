import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { themeReducer } from './features/theme/themeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const themePersistConfig = {
  key: "theme",
  storage: storage,
  whitelist: ["themeState"],
};

const rootReducer = combineReducers({
  reducer: { theme: themeReducer },
  theme: persistReducer(themePersistConfig, themeReducer),
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
