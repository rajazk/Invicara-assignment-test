import { stocksAPI } from "./api";

export const stocksApi = stocksAPI.injectEndpoints({
  endpoints: (builder) => ({
    getStockPrices: builder.query<any, string>({
      query: (stockId) => {
        return {
          url: `query?function=TIME_SERIES_DAILY&outputsize=compact&symbol=${stockId}&apikey=5H9JS95XU1LM4A02`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetStockPricesQuery, useLazyGetStockPricesQuery } = stocksApi;
