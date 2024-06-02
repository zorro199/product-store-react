import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/product.types";

const API_URL = "http://localhost:4200/knife"

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
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