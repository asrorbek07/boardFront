import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { BulletinCommentRdo } from '~/models';
import { FindBulletinCommentsQuery, FindBulletinCommentQuery } from '../query';


const url = (path: string) => `/api/board/feature/bulletin/comment${path}`;

const findBulletinComments = <T = BulletinCommentRdo>(params: {
  postId?: string,
}) => {
  const query = <FindBulletinCommentsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-comments/query'), query);
};

const findBulletinComment = <T = BulletinCommentRdo>(params: {
  commentId?: string,
}) => {
  const query = <FindBulletinCommentQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-comment/query'), query);
};

const findBulletinCommentsPaginated = <T = BulletinCommentRdo>(params: {
  offset?: Offset<T>,
  postId?: string,
}) => {
  const query = <FindBulletinCommentsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-comments/query'), query);
};

const findBulletinCommentPaginated = <T = BulletinCommentRdo>(params: {
  offset?: Offset<T>,
  commentId?: string,
}) => {
  const query = <FindBulletinCommentQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-comment/query'), query);
};

export default {
  findBulletinComments,
  findBulletinComment,
  findBulletinCommentsPaginated,
  findBulletinCommentPaginated,
  
  query: {
    findBulletinComments: (params: FirstParameter<typeof findBulletinComments>) => ({
      queryKey: ['bulletin/comment', 'findBulletinComments', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinComments(queryKey.slice().pop()))?.data,
    }),
    findBulletinComment: (params: FirstParameter<typeof findBulletinComment>) => ({
      queryKey: ['bulletin/comment', 'findBulletinComment', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinComment(queryKey.slice().pop()))?.data,
    }),
    findBulletinCommentsPaginated: (
      params: FirstParameter<typeof findBulletinCommentsPaginated>,
    ) => ({
      queryKey: ['bulletin/comment', 'findBulletinCommentsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinCommentsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findBulletinCommentPaginated: (
      params: FirstParameter<typeof findBulletinCommentPaginated>,
    ) => ({
      queryKey: ['bulletin/comment', 'findBulletinCommentPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinCommentPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

