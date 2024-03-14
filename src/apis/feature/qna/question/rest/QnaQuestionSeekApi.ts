import { FirstParameter, QueryResponse, Offset } from '@vizendjs/accent';
import axios from 'axios';
import { QnaQuestionRdo } from '~/models';
import { FindQnaQuestionQuery, FindQnaQuestionsQuery } from '../query';


const url = (path: string) => `/api/board/feature/qna/question${path}`;

const findQnaQuestion = <T = QnaQuestionRdo>(params: {
  questionId?: string,
}) => {
  const query = <FindQnaQuestionQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-question/query'), query);
};

const findQnaQuestions = <T = QnaQuestionRdo>(params: {
  boardId?: string,
}) => {
  const query = <FindQnaQuestionsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-questions/query'), query);
};

const findQnaQuestionPaginated = <T = QnaQuestionRdo>(params: {
  offset?: Offset<T>,
  questionId?: string,
}) => {
  const query = <FindQnaQuestionQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-question/query'), query);
};

const findQnaQuestionsPaginated = <T = QnaQuestionRdo>(params: {
  offset?: Offset<T>,
  boardId?: string,
}) => {
  const query = <FindQnaQuestionsQuery>{ ...params };
  return axios.post<QueryResponse<T[]>>(url('/find-qna-questions/query'), query);
};

export default {
  findQnaQuestion,
  findQnaQuestions,
  findQnaQuestionPaginated,
  findQnaQuestionsPaginated,
  
  query: {
    findQnaQuestion: (params: FirstParameter<typeof findQnaQuestion>) => ({
      queryKey: ['qna/question', 'findQnaQuestion', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQnaQuestion(queryKey.slice().pop()))?.data,
    }),
    findQnaQuestions: (params: FirstParameter<typeof findQnaQuestions>) => ({
      queryKey: ['qna/question', 'findQnaQuestions', params],
      queryFn: async ({ queryKey }: { queryKey: readonly any[] }) =>
        (await findQnaQuestions(queryKey.slice().pop()))?.data,
    }),
    findQnaQuestionPaginated: (
      params: FirstParameter<typeof findQnaQuestionPaginated>,
    ) => ({
      queryKey: ['qna/question', 'findQnaQuestionPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQnaQuestionPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
    findQnaQuestionsPaginated: (
      params: FirstParameter<typeof findQnaQuestionsPaginated>,
    ) => ({
      queryKey: ['qna/question', 'findQnaQuestionsPaginated', params],
      queryFn: async ({ queryKey, pageParam }: { queryKey: readonly any[]; pageParam?: any }) =>
        (
          await findQnaQuestionsPaginated({
            ...queryKey.slice().pop(),
            offset: pageParam || queryKey.slice().pop().offset,
          })
        )?.data,
    }),
  },
};

