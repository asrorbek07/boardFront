import { QueryRequest } from '@vizendjs/accent';
import { QnaQuestionRdo } from '~/models';


export interface FindQnaQuestionsQuery extends QueryRequest<QnaQuestionRdo[]> {
  boardId?: string;
}

