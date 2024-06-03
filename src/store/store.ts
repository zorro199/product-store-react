import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser} from "./favorites/favorites.slice";
import { api } from "./api";
import { 
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const reducers = combineReducers({
    favorites: favoritesReduser,
    [api.reducerPath]: api.reducer
})

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(api.middleware)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>