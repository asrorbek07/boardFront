import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { FaqPostRdo } from '~/models';
import { FindFaqPostQuery, FindFaqPostsByBoardIdQuery } from '../query';


const url = (path: string) => `/api/board/feature/faq/post${path}`;

const findFaqPost = <T = FaqPostRdo>(params: {
  postId?: string,
}) => {
  const query = <FindFaqPostQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-post/query'), query);
};

const findFaqPosts = <T = FaqPostRdo>(params: {
  boardId?: string,
}) => {
  const query = <FindFaqPostsByBoardIdQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-posts-by-board-id/query'), query);
};

const findFaqPostPaginated = <T = FaqPostRdo>(params: {
  offset?: Offset<T>,
  postId?: string,
}) => {
  const query = <FindFaqPostQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-post/query'), query);
};

const findFaqPostsPaginated = <T = FaqPostRdo>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindFaqPostsByBoardIdQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-posts-by-board-id/query'), query);
};

export default {
  findFaqPost,
  findFaqPosts,
  findFaqPostPaginated,
  findFaqPostsPaginated,
  
  query: {
    findFaqPost: (params: FirstParameter<typeof findFaqPost>) => ({
      queryKey: ['faq/post', 'findFaqPost', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findFaqPost(queryKey.slice().pop()))?.data,
    }),
    findFaqPosts: (params: FirstParameter<typeof findFaqPosts>) => ({
      queryKey: ['faq/post', 'findFaqPosts', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findFaqPosts(queryKey.slice().pop()))?.data,
    }),
    findFaqPostPaginated: (
      params: FirstParameter<typeof findFaqPostPaginated>,
    ) => ({
      queryKey: ['faq/post', 'findFaqPostPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findFaqPostPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findFaqPostsPaginated: (
      params: FirstParameter<typeof findFaqPostsPaginated>,
    ) => ({
      queryKey: ['faq/post', 'findFaqPostsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findFaqPostsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

