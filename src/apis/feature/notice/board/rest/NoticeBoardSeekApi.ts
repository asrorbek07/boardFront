import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { Board } from '~/models';
import { FindNoticeBoardQuery, FindNoticeBoardsQuery } from '../query';


const url = (path: string) => `/api/board/feature/notice/board${path}`;

const findNoticeBoard = <T = Board>(params: {
  boardId?: string,
}) => {
  const query = <FindNoticeBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-board/query'), query);
};

const findNoticeBoards = <T = Board>(params: {}) => {
  const query = <FindNoticeBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-boards/query'), query);
};

const findNoticeBoardPaginated = <T = Board>(params: {
  offset?: Offset<T>,
  postId?: string,
}) => {
  const query = <FindNoticeBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-board/query'), query);
};

const findNoticeBoardsPaginated = <T = Board>(params: {
  offset?: Offset<T>,
}) => {
  const query = <FindNoticeBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-notice-boards/query'), query);
};

export default {
  findNoticeBoard,
  findNoticeBoards,
  findNoticeBoardPaginated,
  findNoticeBoardsPaginated,
  
  query: {
    findNoticeBoard: (params: FirstParameter<typeof findNoticeBoard>) => ({
      queryKey: ['notice/board', 'findNoticeBoard', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findNoticeBoard(queryKey.slice().pop()))?.data,
    }),
    findNoticeBoards: (params: FirstParameter<typeof findNoticeBoards>) => ({
      queryKey: ['notice/board', 'findNoticeBoards', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findNoticeBoards(queryKey.slice().pop()))?.data,
    }),
    findNoticeBoardPaginated: (
      params: FirstParameter<typeof findNoticeBoardPaginated>,
    ) => ({
      queryKey: ['notice/board', 'findNoticeBoardPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findNoticeBoardPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findNoticeBoardsPaginated: (
      params: FirstParameter<typeof findNoticeBoardsPaginated>,
    ) => ({
      queryKey: ['notice/board', 'findNoticeBoardsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findNoticeBoardsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

