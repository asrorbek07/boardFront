import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { BulletinReplyRdo } from '~/models';
import { FindBulletinRepliesQuery } from '../query';


const url = (path: string) => `/api/board/feature/bulletin/reply${path}`;

const findBulletinReplies = <T = BulletinReplyRdo>(params: {
  commentId?: string,
}) => {
  const query = <FindBulletinRepliesQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-replies/query'), query);
};

const findBulletinRepliesPaginated = <T = BulletinReplyRdo>(params: {
  offset?: Offset<T>,
  commentId?: string,
}) => {
  const query = <FindBulletinRepliesQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-replies/query'), query);
};

export default {
  findBulletinReplies,
  findBulletinRepliesPaginated,
  
  query: {
    findBulletinReplies: (params: FirstParameter<typeof findBulletinReplies>) => ({
      queryKey: ['bulletin/reply', 'findBulletinReplies', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinReplies(queryKey.slice().pop()))?.data,
    }),
    findBulletinRepliesPaginated: (
      params: FirstParameter<typeof findBulletinRepliesPaginated>,
    ) => ({
      queryKey: ['bulletin/reply', 'findBulletinRepliesPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinRepliesPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

