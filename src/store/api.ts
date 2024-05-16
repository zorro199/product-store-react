import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IKnife } from "../types/knife.types";

const API_URL = "http://localhost:4200/knife"

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Knife'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getKnife: builder.query<IKnife[], null>({
            query: () => '',
            providesTags:() => [{
                type: 'Knife'
            }]
        })
    })
})

export const { useGetKnifeQuery } = api