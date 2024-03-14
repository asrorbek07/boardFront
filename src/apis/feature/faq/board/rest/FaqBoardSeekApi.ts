import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { Board } from '~/models';
import { FindFaqBoardQuery, FindFaqBoardsQuery, FindFaqBoardByOffsetQuery } from '../query';


const url = (path: string) => `/api/board/feature/faq/board${path}`;

const findFaqBoard = <T = Board>(params: {
  boardId?: string,
}) => {
  const query = <FindFaqBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-board/query'), query);
};

const findFaqBoards = <T = Board>(params: {}) => {
  const query = <FindFaqBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-boards/query'), query);
};

const findFaqBoardByOffset = <T = Board>(params: {
  stageId?: string,
}) => {
  const query = <FindFaqBoardByOffsetQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-board-by-offset/query'), query);
};

const findFaqBoardPaginated = <T = Board>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindFaqBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-board/query'), query);
};

const findFaqBoardsPaginated = <T = Board>(params: {
  offset?: Offset<T>,
}) => {
  const query = <FindFaqBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-boards/query'), query);
};

const findFaqBoardByOffsetPaginated = <T = Board>(params: {
  offset?: Offset<T>,
  stageId?: string,
}) => {
  const query = <FindFaqBoardByOffsetQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-faq-board-by-offset/query'), query);
};

export default {
  findFaqBoard,
  findFaqBoards,
  findFaqBoardByOffset,
  findFaqBoardPaginated,
  findFaqBoardsPaginated,
  findFaqBoardByOffsetPaginated,
  
  query: {
    findFaqBoard: (params: FirstParameter<typeof findFaqBoard>) => ({
      queryKey: ['faq/board', 'findFaqBoard', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findFaqBoard(queryKey.slice().pop()))?.data,
    }),
    findFaqBoards: (params: FirstParameter<typeof findFaqBoards>) => ({
      queryKey: ['faq/board', 'findFaqBoards', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findFaqBoards(queryKey.slice().pop()))?.data,
    }),
    findFaqBoardByOffset: (params: FirstParameter<typeof findFaqBoardByOffset>) => ({
      queryKey: ['faq/board', 'findFaqBoardByOffset', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findFaqBoardByOffset(queryKey.slice().pop()))?.data,
    }),
    findFaqBoardPaginated: (
      params: FirstParameter<typeof findFaqBoardPaginated>,
    ) => ({
      queryKey: ['faq/board', 'findFaqBoardPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findFaqBoardPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findFaqBoardsPaginated: (
      params: FirstParameter<typeof findFaqBoardsPaginated>,
    ) => ({
      queryKey: ['faq/board', 'findFaqBoardsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findFaqBoardsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findFaqBoardByOffsetPaginated: (
      params: FirstParameter<typeof findFaqBoardByOffsetPaginated>,
    ) => ({
      queryKey: ['faq/board', 'findFaqBoardByOffsetPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findFaqBoardByOffsetPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

