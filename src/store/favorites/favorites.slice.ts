import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/product.types";

const initialState: IProduct[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        togleFavorites: ( state, { payload: product} ) => {
            const isExist = state.some(k => k.id === product.id); 
            if (isExist) {
                const index = state.findIndex(item => item.id === product.id)
                if (index !== -1) {
                    state.splice(index, 1)
                }
             } else {
                state.push(product)
             }
        }
    }
})

export const { actions, reducer } = favoritesSlice