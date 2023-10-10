export interface INewPost {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
}

export interface IPagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}
export interface INewPostResponse {
  pagination: IPagination;
  data: INewPost[];
}
