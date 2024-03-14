import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { Board } from '~/models';
import { FindQnaBoardQuery, FindQnaBoardsQuery } from '../query';


const url = (path: string) => `/api/board/feature/qna/board${path}`;

const findQanBoard = <T = Board>(params: {
  boardId?: string,
}) => {
  const query = <FindQnaBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-board/query'), query);
};

const findQanBoards = <T = Board>(params: {}) => {
  const query = <FindQnaBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-boards/query'), query);
};

const findQanBoardPaginated = <T = Board>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindQnaBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-board/query'), query);
};

const findQanBoardsPaginated = <T = Board>(params: {
  offset?: Offset<T>,
}) => {
  const query = <FindQnaBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-boards/query'), query);
};

export default {
  findQanBoard,
  findQanBoards,
  findQanBoardPaginated,
  findQanBoardsPaginated,
  
  query: {
    findQanBoard: (params: FirstParameter<typeof findQanBoard>) => ({
      queryKey: ['qna/board', 'findQanBoard', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQanBoard(queryKey.slice().pop()))?.data,
    }),
    findQanBoards: (params: FirstParameter<typeof findQanBoards>) => ({
      queryKey: ['qna/board', 'findQanBoards', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQanBoards(queryKey.slice().pop()))?.data,
    }),
    findQanBoardPaginated: (
      params: FirstParameter<typeof findQanBoardPaginated>,
    ) => ({
      queryKey: ['qna/board', 'findQanBoardPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQanBoardPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findQanBoardsPaginated: (
      params: FirstParameter<typeof findQanBoardsPaginated>,
    ) => ({
      queryKey: ['qna/board', 'findQanBoardsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQanBoardsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

