import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { BulletinPostRdo } from '~/models';
import { FindBulletinPostQuery, FindBulletinPostsQuery } from '../query';


const url = (path: string) => `/api/board/feature/bulletin/post${path}`;

const findBulletinPost = <T = BulletinPostRdo>(params: {
  postId?: string,
}) => {
  const query = <FindBulletinPostQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-post/query'), query);
};

const findBulletinPosts = <T = BulletinPostRdo>(params: {
  boardId?: string,
}) => {
  const query = <FindBulletinPostsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-posts/query'), query);
};

const findBulletinPostPaginated = <T = BulletinPostRdo>(params: {
  offset?: Offset<T>,
  postId?: string,
}) => {
  const query = <FindBulletinPostQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-post/query'), query);
};

const findBulletinPostsPaginated = <T = BulletinPostRdo>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindBulletinPostsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-posts/query'), query);
};

export default {
  findBulletinPost,
  findBulletinPosts,
  findBulletinPostPaginated,
  findBulletinPostsPaginated,
  
  query: {
    findBulletinPost: (params: FirstParameter<typeof findBulletinPost>) => ({
      queryKey: ['bulletin/post', 'findBulletinPost', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinPost(queryKey.slice().pop()))?.data,
    }),
    findBulletinPosts: (params: FirstParameter<typeof findBulletinPosts>) => ({
      queryKey: ['bulletin/post', 'findBulletinPosts', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinPosts(queryKey.slice().pop()))?.data,
    }),
    findBulletinPostPaginated: (
      params: FirstParameter<typeof findBulletinPostPaginated>,
    ) => ({
      queryKey: ['bulletin/post', 'findBulletinPostPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinPostPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findBulletinPostsPaginated: (
      params: FirstParameter<typeof findBulletinPostsPaginated>,
    ) => ({
      queryKey: ['bulletin/post', 'findBulletinPostsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinPostsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

