import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { Board } from '~/models';
import { FindBulletinBoardQuery, FindBulletinBoardsQuery } from '../query';


const url = (path: string) => `/api/board/feature/bulletin/board${path}`;

const findBulletinBoard = <T = Board>(params: {
  boardId?: string,
}) => {
  const query = <FindBulletinBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-board/query'), query);
};

const findBulletinBoards = <T = Board>(params: {}) => {
  const query = <FindBulletinBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-boards/query'), query);
};

const findBulletinBoardPaginated = <T = Board>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindBulletinBoardQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-board/query'), query);
};

const findBulletinBoardsPaginated = <T = Board>(params: {
  offset?: Offset<T>,
}) => {
  const query = <FindBulletinBoardsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-bulletin-boards/query'), query);
};

export default {
  findBulletinBoard,
  findBulletinBoards,
  findBulletinBoardPaginated,
  findBulletinBoardsPaginated,
  
  query: {
    findBulletinBoard: (params: FirstParameter<typeof findBulletinBoard>) => ({
      queryKey: ['bulletin/board', 'findBulletinBoard', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinBoard(queryKey.slice().pop()))?.data,
    }),
    findBulletinBoards: (params: FirstParameter<typeof findBulletinBoards>) => ({
      queryKey: ['bulletin/board', 'findBulletinBoards', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findBulletinBoards(queryKey.slice().pop()))?.data,
    }),
    findBulletinBoardPaginated: (
      params: FirstParameter<typeof findBulletinBoardPaginated>,
    ) => ({
      queryKey: ['bulletin/board', 'findBulletinBoardPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinBoardPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findBulletinBoardsPaginated: (
      params: FirstParameter<typeof findBulletinBoardsPaginated>,
    ) => ({
      queryKey: ['bulletin/board', 'findBulletinBoardsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findBulletinBoardsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

