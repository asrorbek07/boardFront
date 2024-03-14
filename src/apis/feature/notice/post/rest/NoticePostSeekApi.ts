import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { NoticePostRdo } from '~/models';
import { FindNoticePostQuery, FindNoticePostsQuery } from '../query';


const url = (path: string) => `/api/board/feature/notice/post${path}`;

const findNoticePost = <T = NoticePostRdo>(params: {
  postId?: string,
}) => {
  const query = <FindNoticePostQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-post/query'), query);
};

const findNoticePosts = <T = NoticePostRdo>(params: {
  boardId?: string,
}) => {
  const query = <FindNoticePostsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-posts/query'), query);
};

const findNoticePostPaginated = <T = NoticePostRdo>(params: {
  offset?: Offset<T>,
  postId?: string,
}) => {
  const query = <FindNoticePostQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-post/query'), query);
};

const findNoticePostsPaginated = <T = NoticePostRdo>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindNoticePostsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-posts/query'), query);
};

export default {
  findNoticePost,
  findNoticePosts,
  findNoticePostPaginated,
  findNoticePostsPaginated,
  
  query: {
    findNoticePost: (params: FirstParameter<typeof findNoticePost>) => ({
      queryKey: ['notice/post', 'findNoticePost', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findNoticePost(queryKey.slice().pop()))?.data,
    }),
    findNoticePosts: (params: FirstParameter<typeof findNoticePosts>) => ({
      queryKey: ['notice/post', 'findNoticePosts', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findNoticePosts(queryKey.slice().pop()))?.data,
    }),
    findNoticePostPaginated: (
      params: FirstParameter<typeof findNoticePostPaginated>,
    ) => ({
      queryKey: ['notice/post', 'findNoticePostPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findNoticePostPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findNoticePostsPaginated: (
      params: FirstParameter<typeof findNoticePostsPaginated>,
    ) => ({
      queryKey: ['notice/post', 'findNoticePostsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findNoticePostsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

