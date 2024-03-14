import { QueryRequest } from '@vizendjs/accent';
import { QnaReplyRdo } from '~/models';


export interface FindQnaRepliesQuery extends QueryRequest<QnaReplyRdo[]> {
  commentId?: string;
}

