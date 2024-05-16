import { createSlice } from "@reduxjs/toolkit";
import { IKnife } from "../../types/knife.types";

const initialState: IKnife[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        togleFavorites: ( state, { payload: knife} ) => {
            const isExist = state.some(k => k.id === knife.id); 
            if (isExist) {
                const index = state.findIndex(item => item.id === knife.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
             } else {
                state.push(knife)
             }
        }
    }
})

export const { actions, reducer } = favoritesSlice