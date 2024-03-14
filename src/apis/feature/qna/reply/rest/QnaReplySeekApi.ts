import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { QnaReplyRdo } from '~/models';
import { FindQnaRepliesQuery } from '../query';


const url = (path: string) => `/api/board/feature/qna/reply${path}`;

const findQnaReplies = <T = QnaReplyRdo>(params: {
  commentId?: string,
}) => {
  const query = <FindQnaRepliesQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-replies/query'), query);
};

const findQnaRepliesPaginated = <T = QnaReplyRdo>(params: {
  offset?: Offset<T>,
  commentId?: string,
}) => {
  const query = <FindQnaRepliesQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-replies/query'), query);
};

export default {
  findQnaReplies,
  findQnaRepliesPaginated,
  
  query: {
    findQnaReplies: (params: FirstParameter<typeof findQnaReplies>) => ({
      queryKey: ['qna/reply', 'findQnaReplies', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQnaReplies(queryKey.slice().pop()))?.data,
    }),
    findQnaRepliesPaginated: (
      params: FirstParameter<typeof findQnaRepliesPaginated>,
    ) => ({
      queryKey: ['qna/reply', 'findQnaRepliesPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQnaRepliesPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

