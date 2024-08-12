import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api_key = import.meta.env.VITE_FUGO_API_KEY;
const baseURL = 'https://api.fugle.tw/marketdata/v1.0/stock'




export const stockApi = createApi({
    reducerPath: 'stockApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        headers: {
            Accept: 'application/json',
            'X-API-KEY': api_key,
          },
    }),
    endpoints: (builder) => ({
        fetchStockData: builder.query({
            query: (endpoint) => endpoint,
        })
    })
})


export const { useFetchStockDataQuery } = stockApi;
export const { reducerPath: stockApiReducerPath } = stockApi;
export const { endpoints: { fetchStockData: fetchStockDataEndpoint } } = stockApi;