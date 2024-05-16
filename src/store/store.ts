import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser} from "./favorites/favorites.slice";
import { api } from "./api";


const reducers = combineReducers({
    favorites: favoritesReduser,
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>