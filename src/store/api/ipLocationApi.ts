import { IGetIpLocation } from "../types/ipLocation";
import { ipLocationAPI } from "./api";
import { setIpLocationData } from "../slice/ipLocation";

export const ipLocationApi = ipLocationAPI.injectEndpoints({
  endpoints: (builder) => ({
    getIpLocation: builder.query<IGetIpLocation, void>({
      query() {
        return {
          url: "json",
          method: "GET",
        };
      },
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setIpLocationData(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetIpLocationQuery } = ipLocationApi;
