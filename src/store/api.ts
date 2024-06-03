import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/product.types";
import { REHYDRATE } from 'redux-persist'
import type { Action } from '@reduxjs/toolkit'

const API_URL = "https://fakestoreapi.com/products"

type RootState = any // normally inferred from state

function isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {
  key: string
  payload: RootState
  err: unknown
} {
  return action.type === REHYDRATE
}

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    extractRehydrationInfo(action, {}): any {
        if (isHydrateAction(action)) {
          // when persisting the api reducer
          if (action.key === 'key used with redux-persist') {
            return action.payload
          }
          // When persisting the root reducer
          return action.payload[api.reducerPath]
        }
      },
    endpoints: builder => ({
        getProduct: builder.query<IProduct[], null>({
            query: () => '',
            providesTags:() => [{
                type: 'Product'
            }]
        })
    })
})

export const { useGetProductQuery } = api