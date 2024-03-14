import { QueryRequest } from '@vizendjs/accent';
import { QnaAnswerRdo } from '~/models';


export interface FindQnaAnswerQuery extends QueryRequest<QnaAnswerRdo> {
  answerId?: string;
}

