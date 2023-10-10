import { INewPostResponse } from "../types/newsPost";
import { newsAPI } from "./api";

export const newsPostApi = newsAPI.injectEndpoints({
  endpoints: (builder) => ({
    getNewPosts: builder.query<INewPostResponse, void>({
      query() {
        return {
          url: `news?access_key=770e0a39e2dbb16adffe2d834bcf801a&limit=5`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetNewPostsQuery } = newsPostApi;
