import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { QnaAnswerRdo } from '~/models';
import { FindQnaAnswerQuery, FindQnaAnswersQuery } from '../query';


const url = (path: string) => `/api/board/feature/qna/answer${path}`;

const findQnaAnswer = <T = QnaAnswerRdo>(params: {
  answerId?: string,
}) => {
  const query = <FindQnaAnswerQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-answer/query'), query);
};

const findQnaAnswers = <T = QnaAnswerRdo>(params: {
  questionId?: string,
}) => {
  const query = <FindQnaAnswersQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-answers/query'), query);
};

const findQnaAnswerPaginated = <T = QnaAnswerRdo>(params: {
  offset?: Offset<T>,
  answerId?: string,
}) => {
  const query = <FindQnaAnswerQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-answer/query'), query);
};

const findQnaAnswersPaginated = <T = QnaAnswerRdo>(params: {
  offset?: Offset<T>,
  questionId?: string,
}) => {
  const query = <FindQnaAnswersQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-answers/query'), query);
};

export default {
  findQnaAnswer,
  findQnaAnswers,
  findQnaAnswerPaginated,
  findQnaAnswersPaginated,
  
  query: {
    findQnaAnswer: (params: FirstParameter<typeof findQnaAnswer>) => ({
      queryKey: ['qna/answer', 'findQnaAnswer', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQnaAnswer(queryKey.slice().pop()))?.data,
    }),
    findQnaAnswers: (params: FirstParameter<typeof findQnaAnswers>) => ({
      queryKey: ['qna/answer', 'findQnaAnswers', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQnaAnswers(queryKey.slice().pop()))?.data,
    }),
    findQnaAnswerPaginated: (
      params: FirstParameter<typeof findQnaAnswerPaginated>,
    ) => ({
      queryKey: ['qna/answer', 'findQnaAnswerPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQnaAnswerPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findQnaAnswersPaginated: (
      params: FirstParameter<typeof findQnaAnswersPaginated>,
    ) => ({
      queryKey: ['qna/answer', 'findQnaAnswersPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQnaAnswersPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

