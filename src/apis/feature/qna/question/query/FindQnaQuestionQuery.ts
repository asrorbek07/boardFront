import { QueryRequest } from '@vizendjs/accent';
import { QnaQuestionRdo } from '~/models';


export interface FindQnaQuestionQuery extends QueryRequest<QnaQuestionRdo> {
  questionId?: string;
}

