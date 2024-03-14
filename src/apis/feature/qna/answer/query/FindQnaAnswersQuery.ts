import { QueryRequest } from '@vizendjs/accent';
import { QnaAnswerRdo } from '~/models';


export interface FindQnaAnswersQuery extends QueryRequest<QnaAnswerRdo[]> {
  questionId?: string;
}

